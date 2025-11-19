import axios from 'axios'

const GetWeather = (capital) => {
    const apiKey = import.meta.env.VITE_SOME_KEY
    const units = 'metric'
    const baseUrl = 'https://api.openweathermap.org/data/2.5/weather'
    const city = capital
    const url = `${baseUrl}?q=${city}&appid=${apiKey}&units=${units}`


    return axios.get(url)
        .then(response => {
         console.log(city, typeof city) 
         console.log('Sää data:', response.data)
         return response.data
        })
    }

export default GetWeather

