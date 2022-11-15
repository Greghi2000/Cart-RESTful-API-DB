// https://dog.ceo/api/breeds/image/random
let dogImgDiv = document.getElementById('dogImg')
let refershButtonDiv = document.getElementById('Refresh-Button')

fetch('https://dog.ceo/api/breeds/image/random') .then(response => response.json()).then(json => {
    console.log(json)
    dogImgDiv.innerHTML = `<img src="${json.message}" height = 300px width = 300px />`
})

refershButtonDiv.onclick = () => {
    fetch('https://dog.ceo/api/breeds/image/random') .then(response => response.json()).then(json => {
    console.log(json)
    dogImgDiv.innerHTML = `<img src="${json.message}" height = 300px width = 300px />`
})
}

