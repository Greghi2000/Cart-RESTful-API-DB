let cityName = document.getElementById("city-name")
let weatherType = document.getElementById("weather-type")
let temp = document.getElementById("temp")
let minTemp = document.getElementById("min-temp")
let maxTemp = document.getElementById("max-temp")


// const getWeatherData = (city) =>{
//     const options = {
//         method: 'GET',
//         headers: {
//             'X-RapidAPI-Key': '844ffcb792msh59a7d8935168c43p1609afjsnc302123b26ac',
//             'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
//         }
//     }
    
//     fetch(`https://weatherapi-com.p.rapidapi.com/forecast.json?q=${city}`, options)
//         // .then(response => response.json())
//         .then(response => console.log(response))
//         .catch(err => console.error(err))
// }

async function getWeatherData1(city){
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '844ffcb792msh59a7d8935168c43p1609afjsnc302123b26ac',
            'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
        }
    }
    const url = `https://weatherapi-com.p.rapidapi.com/forecast.json?q=${city}`
    const res = await fetch(url, options)
    const data = await res.json()
    console.log(data)
    return data
}

const searchCity = async () => {
    const city = document.getElementById('city-input').value
    let data = await getWeatherData1(city) // by passing await it works, if not its big mandella. Every time there is an async function, to call the data within that function you have to do await. Kind of like a return.
    console.log(data)
    showWeatherData(data)
}



const showWeatherData = (x) => {
    cityName.innerText = x.location.name
    weatherType.innerText = x.current.condition.text
    temp.innerText = x.current.temp_c
    minTemp.innerText = x.current.feelslike_c
    maxTemp.innerText = x.current.humidity
}