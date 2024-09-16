import axios from 'axios'
const baseUrl = 'http://localhost:3002/persons'

const getAll = () => {
    console.log('URL', baseUrl)
    return axios.get(baseUrl)
}

const create = personObject => {
    console.log('uusi objecti', personObject)
    return axios.post(baseUrl, personObject)
}

const update = (id, personObject) => {
    console.log('uuteen sivuun', personObject, `${baseUrl}/${id}`)
    return axios.put(`${baseUrl}/${id}`,personObject)
}

const deletePerson = (id) => {
    return axios.delete(`${baseUrl}/${id}`);
}
export default { 
    getAll: getAll, 
    create: create, 
    update: update,
    delete: deletePerson
  }