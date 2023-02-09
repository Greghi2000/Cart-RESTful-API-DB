class Name{
    constructor(fname, lname){
        this.fname = fname.charAt(0).toUpperCase()+fname.slice(1).toLowerCase()
        this.lname = lname.charAt(0).toUpperCase()+lname.slice(1).toLowerCase()
        this.fullname = `${this.fname} ${this.lname}`
        this.initials = `${this.fname[0]}.${this.lname[0]}`.toUpperCase()
    }
    
}


n1 = new Name("john", "SMITH")

// console.log(n1.fullname)


possibleBonus = (a,b) => {
    return (a-b && b-a <= 6)
}

// console.log(possibleBonus(3, 17))

redundant = (str) => {
    return x => str
}

let f2 = redundant('apple')

console.log(f2)

let string = "2247133333"
let string2 = [1,2,3,4,5,6,7]
// for(x of string) {
//     console.log(x)
// }
let ex = string.split()
let exmap = ex.map(x => Number(x))
// console.log(exmap)

let stringToArray = string2.filter(x => x%2 == 1)

// console.log(stringToArray)


function returnEven(arr) {
    return arr.filter(x => x%2 == 0)
}

function returnOdd(arr) {
    return arr.filter(x => x%2 == 1)
}

function evenOrOdd(str) {
    let odds = returnOdd(str.split(""))
    let evens = returnEven(str.split(""))
    let resultOdd = odds.reduce((prev, curr) => parseInt(prev) + parseInt(curr))
    let resultEvens = evens.reduce((prev, curr) => parseInt(prev) + parseInt(curr))
    if(resultEvens > resultOdd){
        return "Even is greater than Odd"
    }else if(resultOdd > resultEvens){
        return "Odd is greater than Even"
    }else if(resultEvens == resultOdd){
        return "Even and Odd are the same"
    }
}


// console.log(evenOrOdd("213613"))

function num_of_digits(num) {
    let arr = []
    let num2 = String(num).split("")
    console.log(num2)
	for(x in num2){
        arr.push(x)
    }
    return arr.length
}

// console.log(num_of_digits(1305981031,22))

function toArray(obj) {
	return Object.entries(obj)
}

// console.log(toArray({ shrimp: 15, tots: 12 }))

function concat(...args) {
    let arr = []
    for(x of args){
        arr.push(x)
    }
    console.log(arr)
    return arr.flat()
}

// console.log(concat([1, 2, 3], [4, 5], [6, 7]))


class Circle {
    constructor(radius){
        this.radius = radius
    }
    getArea() {
        return Math.PI*(this.radius**2)
    }
    getPerimeter() {
        return Math.PI*this.radius*2
    }
}

let circy = new Circle(4.44)

// console.log(circy.getPerimeter())

function triangle(n) {
    return n*(n+1)/2
}

function arrayOfMultiples(num, length) {
    let arr = []
    let i =1
    while(i<=length) {
        let result = num * i
        i++
        arr.push(result)
    }
    return arr
}


// console.log(arrayOfMultiples(7, 10))


function keysAndValues(obj) {
	let arr1 =[]
    let result1 = Object.keys(obj)
    let result2 = Object.values(obj)
    arr1.push(result1.sort())
    arr1.push(result2.sort())
    return arr1
}

// console.log(keysAndValues({ z: 5, a: 1, b: 2, c: 3 }))

function intWithinBounds(n, lower, upper) {
	if(n % 1 != 0) {
        return false
    }else if(n>lower && n< upper) {
        return true
    } else {
        return false
    }
}

// console.log(intWithinBounds(3.5, 1, 9))

function compact(arr) {
	let falsey = arr.filter(value => value)
    return falsey
}

// console.log(compact([null, 0, "", undefined, NaN, 'hello']))

function removeLeadingTrailing(n) {
	return parseFloat(n)
}
// console.log(removeLeadingTrailing(34.00000))

// function sevenBoom(arr) {
//     let lastArr = []
//     let arrToSt = arr.toString()
//     let arr101 = arrToSt.split('')
//     for(x of arr101) {
//         lastArr.push(parseInt(x))
//     }
//     if(lastArr.includes(7)) {
//         return 'Boom!'
//     }else {
//         return 'there is no 7 in the array'
//     }
// }
function sevenBoom(arr) {
    // let newArr = arr.join()
    if(arr.includes(7)) {
        return 'Boom!'
    }else {
        return 'there is no 7 in the array'
    }
}
// console.log(sevenBoom([2, 55, 60, 97, 86]))

function textToNumberBinary(str) {
	let newStr = ''
    let wrongStr = ''
    let str1 = str.toLowerCase()
    console.log(str1)
    let arr = str1.split(' ')
    for(x of arr){
        // console.log(x)
        if(x == 'zero'){
            newStr += '1'
        }else if(x == 'one'){
            newStr += '0'
        }
    }
    if(newStr.length%8 == 0){
        return newStr
    }else {
        return wrongStr
    }
}

// console.log(textToNumberBinary("one zero zero one zero ten one one one one two"))


function countBoomerangs(arr) {
    let count = 0
	for(let x =0; x < arr.length; x++){
        if(arr[x] !== arr[x+1] && arr[x] === arr[x+2]){
            count += 1
        }
    }
    return count
}


// console.log(countBoomerangs([4, 4, 4, 9, 9, 9, 9]))


function oddishOrEvenish(num) {
    let arr = []
    let value = num.toString()
    let result = value.split('')
    console.log(result)
    for(x of result){
        arr.push(Number(x))
    }
    let finalRes = arr.reduce((prev, curr) => prev + curr)
    if(finalRes%2 == 0){
        return 'Evenish'
    }else{
        return 'Oddish'
    }
}

// console.log(oddishOrEvenish(433))