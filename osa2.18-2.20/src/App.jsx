import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'
import SearchCountryForm from './SearchCountryForm.jsx'
import countryService from './services/countryService.js'
import ListOfCountries from './ListOfCountries.jsx'


function App() {
  const [count, setCount] = useState(0)
  const [searchCountry, setSearchCountry] = useState('')
  const [countries, setCountries] = useState([])
  const [showCountries, setShowCountries] = useState(true)
  const [emptyBar, setEmptyBar] = useState([])
  const [filterCountries, setFilterCountries] = useState([])
  const [content, setContent] = useState('')

  useEffect(() => {
    countryService.getAll().then(response => {
      console.log('promise fulfilled', response)
      setCountries(response.data)
    }
      )
  }, [])

    // Alla oleva suodattaa maiden nimet objekteista, joissa on maat
  useEffect(() => { 
    if (searchCountry === '') {
      setContent(null)
      return
    }
    const countriesToShow = countries.filter(country => 
        country.name.common.toLowerCase().includes(searchCountry.toLowerCase())
        )
      if (countriesToShow.length > 10) {
        console.log('Liian monta maata');
        setContent('Liian monta maata')
      }
      else {
        setContent(countriesToShow)
      }
      }, [countries, searchCountry])

    // Alla oleva asettaa setSearchCountryn arvon siihen,
    //mitä käyttäjä kirjoittaa hakukenttään
  const handleSearchCountry = (event) => {
    setSearchCountry(event.target.value);
  }
// SearchCountryForm on komponentti, joka eri tiedostossa
//Hoitaa searchbarin ja saa komponentiksi kaksi alla olevaa
  return (
    <div>
  <SearchCountryForm
    searchCountry={searchCountry}
    handleSearchCountry={handleSearchCountry}
  />
  <ListOfCountries 
    countriesToShow={content}
    />

    </div>
  )
}

export default App
