let firstDiv = document.getElementById("first-div")
const password = document.getElementById("password-input")
const username = document.getElementById("username-input")
const emailRequirements = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/
const buttonA = document.getElementById("button-a")
const buttonB = document.getElementById("button-b")
const buttonC = document.getElementById("button-c")
const buttonAA = document.getElementById("button-1a")
const buttonBB = document.getElementById("button-1b")
const buttonCC = document.getElementById("button-1c")
const enterButton = document.getElementById("enter-button")

let userData = []
let buttonChoice = []

function verifyUsername() {
    if(emailRequirements.test(username.value) == true){
        return username.value
    }else if(emailRequirements.test(username.value) == false){
        firstDiv.innerText = 'Email does not exist'
    }

}

function verifyPassword() {
    console.log(password.value)
    if(password.value.length < 8){
        console.log('shorter')
        firstDiv.innerText = 'Password must be longer than 6 characters'
    }
}

const logIn = () => {
    verifyPassword()
    verifyUsername()
    if(emailRequirements.test(username.value) == true && password.value.length > 8){
        let thisUserData = {
            Username: username.value,
            Password: password.value
        }
        userData.push(thisUserData)
        location.href = 'file:///Users/gregoriofumagalli/Downloads/gitstuff/course/cv-website-work/log-in-page/questionaire.html'
    }
    console.log(userData)
}


console.log(buttonA.checked)

enterButton.onclick = () => {
    if(buttonA.checked){    
        console.log('You clicked button A')
        buttonChoice.push('A')
        console.log(buttonChoice)
    }else if(buttonB.checked) {
        console.log('You clicked button B')
        buttonChoice.push('B')
        console.log(buttonChoice)
    }else if(buttonC.checked) {
        console.log('You clicked button C')
        buttonChoice.push('C')
        console.log(buttonChoice)
    }
    //write to file
    fetch POST -> httpxxxxx/adduser=user&pass=password
}

// buttonA.addEventListener('click', function () {
//     enterButton.onclick = () => {
//         console.log('You clicked button A')
//         buttonChoice.push('A')
//         console.log(buttonChoice)
//     }
//     // location.href = 'file:///Users/gregoriofumagalli/Downloads/gitstuff/course/cv-website-work/log-in-page/thanks.html'
// })
// buttonB.addEventListener('click', function () {
//     enterButton.onclick = () => {
//         console.log('You clicked button B')
//         buttonChoice.push('B')
//         console.log(buttonChoice)
//     }
// })
// buttonC.addEventListener('click', function () {
//     enterButton.onclick = () => {
//         console.log('You clicked button C')
//         buttonChoice.push('C')
//         console.log(buttonChoice)
//     }
// })
// buttonAA.addEventListener('click', function () {
//     enterButton.onclick = () => {
//         console.log('You clicked button A')
//         buttonChoice.push('A')
//         console.log(buttonChoice)
//     }
//     // location.href = 'file:///Users/gregoriofumagalli/Downloads/gitstuff/course/cv-website-work/log-in-page/thanks.html'
// })
// buttonBB.addEventListener('click', function () {
//     enterButton.onclick = () => {
//         console.log('You clicked button B')
//         buttonChoice.push('B')
//         console.log(buttonChoice)
//     }
// })
// buttonCC.addEventListener('click', function () {
//     enterButton.onclick = () => {
//         console.log('You clicked button C')
//         buttonChoice.push('C')
//         console.log(buttonChoice)
//     }
// })
// buttonD.addEventListener('click', function () {
//     console.log('You clicked button D')
//     buttonChoice.push('D')
//     console.log(buttonChoice)
// })


// const fs = require('fs')


