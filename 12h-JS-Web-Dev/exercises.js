// const add = (a,b) => a+b

// const sub = (x,y) => x-y

// const mul = (x,y) => (x*y)

// const print = (x) => console.log(x)

// print(mul(2,4))

// let object = {
//     name: 'Gregorio',
//     shirtcolor: 'Black'
// }

// object.phone = 1234


// let person2 = {
//     name: 'Quazi',
//     shirt: 'Black'
// }

// console.log(person2.shirt)

// function print(x) {
//     return `My name is ${x.name} and my shirt is ${x.shirt}` 
// }

// console.log(print(person2))
// const introducer = (name, shirt) => {
//     const person = {
//         name: name,
//         shirt: shirt,
//         assets: 100000,
//         debt: 50000,
//         netWorth: function() {
//             return this.assets = this.debt
//         }
//     }
//     const netWorth = person.assets - person.debt 
//     const intro = `My name is ${person.name} , my shirt is ${person.shirt} and my net worth is $${person.netWorth()}`
//     return intro
// }

// console.log(introducer('Gregorio', 'Black'))

arr = [ 'hello', 'i', 'am', 'called', 'Gregorio']

// for(let x of arr) {
//     console.log(x)
// }

// for(x=0; x<arr.length; x++) {
//     console.log(x +1, arr[x])
// }

// arr2 = [1,2,3,4,5,6,7,8,9]

// const double = (newarr) => {
//     let result = []
//     for(const x of newarr) {
//         result.push(x*2)
//     }
//     return result
// }

// console.log(double([1,3,6]))

// const letterCounter = (phrase) => {
//     let result = 0
//     for(x in phrase) {
//         result = Number(x)+ 1
//     }
//     return { result }
// }

// const letterCounter = (phrase) => {
//     return phrase.length
// }

// phrase = 'how many germans did the SAS kill?'

// console.log(letterCounter(phrase))

// const addUp = (numbers) =>{
//     let result = 0
//     for(x of numbers) {
//         result = result + x
//     }
//     return {result}
// }

// console.log(addUp([1,2,3,4,5]))

// const max = (numbers) => {
//     let result = numbers[0]
//     for(x of numbers) {
//         if(x > result) {
//             result = x
//         }
//     }
//     return result
// }

// console.log(max([1,2,3,5,7,8,34,3,231]))

// letterFrequency = (phrase) => {
//     let frequency = {}
//     for(x of phrase) {
//         if(x in frequency) {
//             frequency[x] = frequency[x] +1
//         } else {
//             frequency[x] = 1
//         }
//     }
//     return frequency
// }

// console.log(letterFrequency('hahaahahahhaaaahhahajdgsfdgfsdjfhgsdz'))

// x = ('jhgfjdshgf')
// console.log(x[3]+1)

// const wordFrequency = (phrase) => {
//     let frequency = {}
//     words = phrase.split(' ')
//     for(x of words) {
//         if(x in frequency) {
//             frequency[x] = frequency[x] + 1
//         } else{
//             frequency[x] = 1
//         }
//     }
//     return frequency
// }

// const wordFrequency = (phrase) => {
//     let words = phrase.split(' ')
//     return letterFrequency(words)
// }

// console.log(wordFrequency('hello how are you doing doing hello')

// parseArray = (arr) => {
//     let result = []
//     for(x of arr) {
//         result.push(x.toString())
//     }
//     return result
// }

// console.log(parseArray([1, 2, "a", "b"]))

// let number = [1,2,3,7,5,9,7,8,9]

// let result = number.map(x => x * 2)

// console.log(result)


// doubleNumbers = (x) => {
//     return x.map(y => y*2)
// }

// console.log(doubleNumbers([435,67,43,6,8,3]))

// tuckIn = (arr1, arr2) => {
//     let x = arr1.pop()
//     for(elem of arr2) {
//         arr1.push(elem)
//     }
//     arr1.push(x)
//     return arr1
// }

// tuckIn = (arr1, arr2) => {
//     return [arr1[0], ...arr2, arr1[1]]
// }

// console.log(tuckIn([1, 10], [2, 3, 4, 5, 6, 7, 8, 9]))

// const countTrue = (arr) => {
//     let x = (arr.filter(x => x == true))
//     return x.length
// }

// console.log(countTrue([true, false, false, true,true, false, false, true,true, false, false, true,true, false, false, true,true, false, false, true,true, false, false, true, false]))


// function redundant(str) {
// 	return String(str)
// }

// const f1 = redundant("apple")

// console.log(redundant(f1))


let actorsInfo = [
    {actor: 'Jhonny', netWorth: 200000},
    {actor: 'Amber Heard', netWorth: 10},
    {actor: 'Leonardo DiCaprio', netWorth: 1000000}
]

let result = actorsInfo.filter(x => x.netWorth > 10)

let newResult = result.map(x => x.actor)

// console.log(newResult.join())

let sumArrow = (a,b) => (a*b)

let numbers = [1,2,3,4]

let result2 = numbers.reduce(sumArrow)

// console.log(result)

let test = actorsInfo.map(x => x.netWorth)

let newTest = test.reduce((a,b) => a+b)

// console.log(newTest)

let arrOfNums = [1,2,3]

let resulteEx = arrOfNums.reduce((a,b) => a+b)

// console.log(resulteEx)

var voters = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
]

let totalVoters = (arg) => arg.filter(x => x.voted == true).length

// console.log(totalVoters(voters))

var wishlist = [
    { title: "Tesla Model S", price: 90000 },
    { title: "4 carat diamond ring", price: 45000 },
    { title: "Fancy hacky Sack", price: 5 },
    { title: "Gold fidgit spinner", price: 2000 },
    { title: "A second Tesla Model S", price: 90000 }
]

shoppingSpree = (arr) => {
    let result = arr.map(x => x.price)
    return result.reduce((a,b) => a+b)
}

// console.log(shoppingSpree(wishlist))