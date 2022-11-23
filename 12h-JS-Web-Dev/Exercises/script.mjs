import { rejects } from "assert"
import fetch from "node-fetch"
import { resolve } from "path"
import { createUnzip } from "zlib"
func = () =>  console.log('soup')

// setTimeout(func, 2000) 


let promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        let isReady = [true, false][Math.floor((Math.random())*2)]
        isReady ? resolve('soup is ready'):
        reject('no soup today')
    }, 2000)
})

console.log(promise1.then(success => console.log({success})) .catch(error => console.log({error})))

fetch = ('https://dog.ceo/api/breeds/image/random') 
.then(response => response.json())
.then(data => console.log(data))


let dogFunc = async () => {
    let url = 'https://dog.ceo/api/breeds/image/random'
    let response = await fetch(url)
    let data = await response.json()
    console.log(data)
}

dogFunc()

let noSoup = async () => {
    let data = { review: 0, pay: 0, tip: 0 }
    try {
      let response = await promise1
      console.log(response)
      data.review = 5
      data.pay = 10
      data.tip = .2
      return data
    }
    catch (error) {
      console.log(error)
      data.review = 1
      data.pay = 0
      data.tip = 0
      return data
    }
}

noSoup().then(value => console.log(value))

let promise = new Promise((resolve, reject) => {
    let hasSoup = [true, false][Math.floor(Math.random()*2)]
    if(hasSoup == true) {
        resolve ('The waiter has soup')
    }else if (hasSoup == false) {
        reject ('The waiter does NOT have soup')
    }
})

console.log(promise.then(success => console.log([success])) .catch(rejected => console.log([rejected])))

let getUserData = async () => {
    let url = 'https://jsonplaceholder.typicode.com/users/1'
    let response = await url
    let data = response.json
    return data
}


const getUserData2 = async () => {
    let url = 'https://jsonplaceholder.typicode.com/users/1'
    let response = await fetch(url)
    let data = await response.json()
    console.log(data)
}

// getUserData2()
  
// console.log(getUserData())

let p = new Promise((resolve, reject) => {
    let a = 1+2
    if(a == 2) {
        resolve('Success')
    }else{
        reject('Failure')
    }
})

p.then((message) => {
    console.log('The output of the promise was a ' + message)
}).catch((message) => {
    console.log('The output of the promise was a ' + message)
})

console.log(p)


let p2 = new Promise((resolve, reject) => {
    let z = 1 + 1
    if(z=2) {
        resolve('This is resolve')
    }else{
        reject('This is reject')
    }
})

p2.then((input) => {
    console.log(`This is where .then and result print: ${input}`)
}) .catch((input) => {
    console.log(`This is where .catch and reject print: ${input}`)
})

let url = 'https://restcountries.com/v3.1/name/united'

async function fetchData() {
    const result = await fetch(url)
    const country = await result.json()
    console.log(country)
}

fetchData()