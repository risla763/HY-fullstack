import React from 'react';

const ListOfCountries = ({ countriesToShow }) => {
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
        <p>Capital: {countriesToShow[0].capital[0]}</p>
        <p>Area: {countriesToShow[0].area}</p>
        <h3>Languages:</h3>
        <ul>
          {Object.values(countriesToShow[0].languages).map(language => (
            <li key={language}>{language}</li>
          ))}
        </ul>
        <img src={countriesToShow[0].flags.png} />
      </div>
    )
  }
  return (
    <div>
      <ul style={{ listStyleType: 'none', padding: 0, margin: 0 }}>
        {countriesToShow.map(country => {
        console.log('Moi from listofcountries',country.name.common);
        return  <li 
        key={country.name.common}> {country.name.common}
        </li>
        })}
      </ul>
    </div>
  )
}

export default ListOfCountries;