// const Joi = require('joi')
// const express = require('express')
// const app = express()
// app.use(express.json())
// const course = [
//     {id:1, name: 'course1'},
//     {id:2, name: 'course2'},
//     {id:3, name: 'course3'},
// ]


// function validateCourse(x) {
//     const schema = {
//         name: Joi.string().min(3).required()
//     }

//     return Joi.validate(x, schema)
// }

// app.get('/',(req,res) => {
//     res.send('Hello World')
// })

// app.get('/api/course',(req, res) => {
//     res.send(course)
// })

// app.post('/api/course',(req, res) => {
//     const schema = {
//         name: Joi.string().min(3).required()
//     }
//     const result = Joi.validate(req.body, schema)
//     if(result.error){
//         res.status(400).send(result.error)
//         return
//     }
//     const courses = {
//         id:course.length +1,
//         name: req.body.name
//     }
//     course.push(courses)
//     res.send(courses)
// })

// app.put('/api/course/:id', (req,res) => {
//     const result = course.find(c => c.id === parseInt(req.params.id))
//     if(!course) res.status(404).send('The course with the given ID you are looking for does not exist')
//     const { error } = validateCourse(req.body)
//     if(error){
//         res.status(400).send(error.details[0].message)
//         return
//     }
//     result.name = req.body.name
//     res.send(result)
// })

// app.get('/api/course/:id',(req, res) => {
//     const courses = course.find(c => c.id === parseInt(req.params.id))
//     if(!course) res.status(404).send('The course with the given ID you are looking for does not exist')
//     // so if course can not/does not find a value, return error 404
//     res.send(courses)
// })

// app.delete('/api/course/:id',(req,res) => {
//     const courses = course.find(c => c.id === parseInt(req.params.id))
//     if(!course) res.status(404).send('The course with the given ID you are looking for does not exist')
//     const index = course.indexOf(courses)
//     course.splice(index, 1)
//     res.send(course)
// })

// app.get('api/course/:year/:month', (req, res) => {
//     res.send(req.params)
// })

// const port = process.env.PORT || 3000
// app.listen(port, () => console.log(`Listening on port ${port}`))