import {React, useEffect, useState} from 'react';
import GetWeather from './GetWeather.jsx'

const ListOfCountries = ({ countriesToShow }) => {
  const [countrySelected, setCountry] = useState(null)
  const [weatherData, setWeatherData] = useState(null)

  useEffect(() => {
  setCountry(null)
  setWeatherData(null)
}, [countriesToShow])

  useEffect(() => {
    if (countriesToShow?.length !== 1) {
      setCountry(null)
    }
  }, [countriesToShow?.length])

  useEffect(() => {
    if (countriesToShow?.length === 1) {
      const capital = countriesToShow[0].capital[0]
      GetWeather(capital)
        .then(data => setWeatherData(data))
      }}, [countriesToShow])

  useEffect(() => {
    if (countrySelected) {
        const capital = countrySelected.capital[0]
        GetWeather(capital)
          .then(data => setWeatherData(data))
      }
  })

  if (countriesToShow === null) return null
  if (countriesToShow === 'Liian monta maata') {
    return <div>Too many matches, specify another filter</div>;
  }
  if (countriesToShow.length === 0) {
    return null
  }
  if (countriesToShow.length === 1) {
    return (
      <div>
        <h2>{countriesToShow[0].name.common}</h2>
        <p>Capital {countriesToShow[0].capital[0]}</p>
        <p>Area {countriesToShow[0].area}</p>
        <h3>Languages</h3>
        <ul>
          {Object.values(countriesToShow[0].languages).map(language => (
            <li key={language}>{language}</li>
          ))}
        </ul>
        <img src={countriesToShow[0].flags.png} />
        {weatherData ? (
          <div>
            <h3>Weather in {weatherData.name}</h3>
            <p>Temperature {weatherData.main.temp} Celsius</p>
            <img src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
            />
            <p>Wind {weatherData.wind.speed} m/s</p>
          </div>
        ) : (
          null
        )}
      </div>
    )
  }
  if (countrySelected) {
    return (
      <div>
        <h2>{countrySelected.name.common}</h2>
        <p>Capital {countrySelected.capital[0]}</p>
        <p>Area {countrySelected.area}</p>
        <h3>Languages</h3>
        <ul>
          {Object.values(countrySelected.languages).map(language => (
            <li key={language}>{language}</li>
          ))}
        </ul>
        <img src={countrySelected.flags.png} />
        {weatherData ? (
          <div>
            <h3>Weather in {weatherData.name}</h3>
            <p>Temperature {weatherData.main.temp} Celsius</p>
            <img src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
            />
            <p>Wind {weatherData.wind.speed} m/s</p>
          </div>
        ) : (
          null
        )}
      </div>
     
    )
  }
  return (
    <div>
      <ul style={{ listStyleType: 'none', padding: 0, margin: 0 }}>
        {countriesToShow.map(country => {
        return  <li 
        key={country.name.common}> {country.name.common}
        <button onClick={() => setCountry(country)}
        style={{ color: 'black', backgroundColor: 'white' }}
          >show</button>
        </li>
        })}
      </ul>
    </div>
  )
}

export default ListOfCountries;