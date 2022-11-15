let title = document.getElementById('title')

console.log(title.innerText)


let message = 'Color Game App'
title.innerText = message

title.innerHTML = message

title.style.backgroundColor = "red"

let redDiv = document.getElementById("red")
let yellowDiv = document.getElementById("yellow")
let greenDiv = document.getElementById("green")

// yellowDiv.onclick = () => console.log('yellow')
// redDiv.onclick = () => console.log('red')
// greenDiv.onclick = () => console.log('green')

const squares = document.querySelectorAll('.colorSquare')

// console.log(squares[0].value) 

// squares.forEach(square => {
//     square.onclick = () => console.log(square.value)
// })


const timesClicked = {'red':0, 'yellow':0, 'green':0}

squares.forEach(square => {
    square.onclick = () => {
        timesClicked[square.value] +=1
        square.innerText = timesClicked[square.value]
    }
})

function clearScores() {
    timesClicked.red = 0
    timesClicked.green = 0
    timesClicked.yellow = 0
    squares.forEach(square => square.innerText= '')
}


let clearGameButton = document.getElementById('clear-game')
clearGameButton.onclick = () => clearScores()