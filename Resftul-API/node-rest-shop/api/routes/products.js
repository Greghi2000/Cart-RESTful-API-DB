const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const multer = require('multer')
const checkAuth = require('../middleware/check-auth')

const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, 'uploads/')
    },
    filename: function(req, file, cb){
        cb(null, new Date().toISOString() + file.originalname)
    // filename: function (req, file, cb) {
    //     const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    //     cb(null, file.fieldname + '-' + uniqueSuffix)
    }
})

const fileFilter = (req, file, cb) => {
    if(file.mimetype === 'image/jpeg' || file.mimetype === 'image/png' || file.mimetype === 'image/webp'){
        cb(null, true)
    }else{
        cb(null, true)
    }
}

const upload = multer({storage: storage, limits:{
    fileSize: 1024 * 1024 *5
}, fileFilter: fileFilter
})

// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, 'uploads')
//   },
//   filename: function (req, file, cb) {
//     const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
//     cb(null, file.fieldname + '-' + uniqueSuffix)
//   }
// })

// const upload = multer({ storage: storage })

const Product = require('../models/product')

router.get('/', (req, res, next) => {
    Product.find()
    .select('name price _id productImage')
    .exec()
    .then(docs => {
        const response = {
            count: docs.length,
            products: docs.map(doc =>{
                return{
                    name: doc.name,
                    price: doc.price, 
                    productImage: doc.productImage,
                    _id: doc._id,
                    request: {
                        type: 'GET',
                        url: 'http://localhost:3000/products/' + doc._id
                    }
                }
            })
        }
        // if(docs.length >= 0){
            res.status(200).json(response)
        // }else{
    //         res.status(404)
    //     }
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({
            error: err
        })
    })
})

router.post('/', checkAuth, upload.any('productImage'), (req, res, next) => {
    console.log("files:", req.files)
    const product = new Product({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        price: req.body.price,
        productImage: req.files.path
    })
    product.save()
    .then(result => {
        // console.log(result.file)
        res.status(201).json({
            message: 'Created product succesfully',
            createProduct: {
                name: result.name,
                price: result.price,
                _id: result._id,
                request: {
                    type: 'GET',
                    url: 'http://localhost:3000/products/' + result._id
                }
            }
        })
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({
            error: err
        })
    })
})

router.get('/:productId', (req, res, next) => {
    const id = req.params.productId
    Product.findById(id)
    .select('name price _id productImage')
    .exec()
    .then(doc => {
        console.log("From database", doc)
        if(doc) {
            res.status(200).json({
                product: doc,
                request: {
                    type: 'GET',
                    description: 'GET ALL PRODUCTS',
                    url: 'http://localhost:3000/products/'
                }
            })
        }else{
            res.status(404).json({
                message: 'No valid entry found for provided ID '
            })
        }
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({error: err})
    })
})


router.patch('/:productId', checkAuth, (req, res, next) => {
    const id = req.params.productId
    const updateOps = {}
    for(x of req.body){
        updateOps[x.propName] = x.value
    }
    Product.update({_id: id}, {$set: updateOps})
    .exec()
    .then(result => {
        res.status(200).json({
            message: 'Product updated',
            request: {
                type: 'GET',
                url: 'http://localhost:3000/products/' + id
            }
        })
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({
            error: err
        })
    })
})

router.delete('/:productId', checkAuth, (req, res, next) => {
    const id = req.params.productId
    Product.remove({_id: id}).exec()
    .then(result => {
        res.status(200).json({
            message: 'Product deleted',
            request: {
                type: 'POST',
                url: 'http://localhost:3000/products/',
                body: {name: 'String', price: 'Number'}
            }
        })
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({
            error: err
        })
    })
})

module.exports = router