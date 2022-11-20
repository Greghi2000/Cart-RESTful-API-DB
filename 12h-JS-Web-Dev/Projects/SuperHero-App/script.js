let BASE_URL = 'https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/id'
newHeroButton = document.getElementById('button')
heroImgDiv = document.getElementById('heroImg')
searchButton = document.getElementById('searchButton')
searchBar = document.getElementById('searchBar').innerText
heroStat = document.getElementById('heroStats')


let superHero = (id) => {
    fetch(`${BASE_URL}/${id}.json`)
    .then(response => response.json())
    .then(json => {
        let name = `<h2>${json.name}</h2>`
        let powerstats = `<p>${json.powerstats}</p>`
        console.log(json.powerstats)
        let stats2 = getStatsHTML(json)
        heroImgDiv.innerHTML = `${name} <img src= "${json.images.md}"/>`
        heroStat.innerHTML = `${stats2.toUpperCase()}`
    })
}

let getStatsHTML = (character) => {
    let stat = Object.keys(character.powerstats).map(stats => {
        return `<p>${stats}: ${character.powerstats[stats]}</p>`
    })
    console.log(stat.join(''))
    return stat.join('')
}

// let newFunc = (id) => {
//     fetch(`${BASE_URL}/${id}.json`)
//     .then(response => response.json())
//     .then(json => {
//         console.log(json)
//         document.querySelector('body').innerHTML += `<img src= "${json.images.md}"/>`
//     })
// }
// newFunc(83)

// let superHero = () => {
//     fetch('https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/id/245.json')
//     .then(response => response.json())
//     .then(json => console.log(json.images.md))
// }


randomHero = () => {
    let x = Math.ceil(Math.random()*731)
    return x
}
newHeroButton.onclick = () => superHero(randomHero())


getSearchedHero = (id) => {
    console.log(searchBar.value)
    fetch(`${BASE_URL}/${id}.json`)
    .then(response => response.json())
    .then(json => {
        console.log(json)
        heroImgDiv.innerHTML = `<img src= "${json.images.md}"/>`
    })
}

searchButton.onclick = () => getSearchedHero(100)