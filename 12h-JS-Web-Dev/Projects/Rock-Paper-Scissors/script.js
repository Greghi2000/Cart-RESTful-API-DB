let totalScore = {computerTotalScore: 0, playerTotalScore: 0}

function getComputerChoice() {
    let arr = ['Rock', 'Paper', 'Scissors']
    return arr[Math.floor(Math.random()*arr.length)]
}

function getResult(playerChoice, computerChoice) {
    let score
    if (playerChoice == computerChoice) {
        score = 0
    }else if (playerChoice == 'Rock' && computerChoice == 'Scissors') {
        score = 1
    }else if (playerChoice == 'Paper' && computerChoice == 'Rock') {
        score = 1
    }else if (playerChoice == 'Scissors' && computerChoice == 'Paper') {
        score = 1
    }else if (playerChoice == 'Rock' && computerChoice == 'Paper') {
        score = -1
    }else if (playerChoice == 'Scissors' && computerChoice == 'Rock') {
        score = -1
    }else if (playerChoice == 'Paper' && computerChoice == 'Scissors') {
        score = -1
    }
    return score
}


function showResult(score, playerChoice, computerChoice, totalScore) {
    let resultDiv = document.getElementById('result')
    let handsDiv = document.getElementById('hands')
    let playerScoreDiv = document.getElementById('player-score')
    if(playerChoice == computerChoice) {
        resultDiv.innerText = `This means you draw.`
    } else if(score == -1) {
        resultDiv.innerText = `This means you loose.`
    } else if(score == 1) {
        resultDiv.innerText = `This means you win.`
    }
    console.log(totalScore)
    handsDiv.innerText =  `YOU: ${playerChoice} vs OPP: ${computerChoice}.`
    playerScoreDiv.innerText = `Your score: ${totalScore.playerTotalScore}. Computer score: ${totalScore.computerTotalScore}`
}


function onClickRPS(playerChoice) {
    console.log({playerChoice})
    const computerChoice = getComputerChoice()
    console.log({computerChoice})
    const score = getResult(playerChoice, computerChoice)
    totalScore['playerTotalScore'] += score
    totalScore['computerTotalScore'] -= score
    console.log({score})
    console.log(totalScore)
    showResult(score, playerChoice, computerChoice, totalScore)
}



function playGame() {
    let rpsButtons = document.querySelectorAll('.rpsButton')
    rpsButtons.forEach(x => {
        x.onclick = () => onClickRPS(x.value)
    })  
    let endGameButton = document.getElementById('endGameButton')
    endGameButton.onclick = () => endGame(totalScore)
}

function endGame(totalScore) {
    totalScore.playerTotalScore = 0
    totalScore.computerTotalScore = 0
    let resultDiv = document.getElementById('result')
    let handsDiv = document.getElementById('hands')
    let playerScoreDiv = document.getElementById('player-score')
    resultDiv.innerText = ''
    handsDiv.innerText = ''
    playerScoreDiv.innerText = ''
}

playGame()