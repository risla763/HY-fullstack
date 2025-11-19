import axios from 'axios'
const baseUrl = 'https://studies.cs.helsinki.fi/restcountries/api/all'

const getAll = () => {
    console.log('URL', baseUrl)
    return axios.get(baseUrl).catch(error => {
        console.log('fail')
    })
}

const create = countryObject => {
    console.log('uusi objekti', countryObject)
    return axios.post(baseUrl, countryObject)
}

const update = (id, countryObject) => {
    console.log('uuteen sivuun', countryObject, `${baseUrl}/${id}`)
    return axios
    .put(`${baseUrl}/${id}`,countryObject)
    .then(updatedCountryObject => {
        updatedCountryObject.data
    })
}

const deleteCountry = (id) => {
    return axios.delete(`${baseUrl}/${id}`).catch(error => {
        console.log('fail')
    })
}
export default { 
    getAll: getAll, 
    create: create, 
    update: update,
    delete: deleteCountry
  }