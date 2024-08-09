import React, { useState } from 'react';

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 

  const [newName, setNewPerson] = useState('')

  const addPerson = (event) => {
  event.preventDefault()
  console.log('uusi henkilö LISÄTTY', event.target)

  const IsInList = persons.some(person => person.name === newName)
  console.log('TARKISTUS', IsInList )
  console.log('LISTA', persons)

  if (!IsInList) {
  const personObject = {
    name: newName,
    id: String(persons.length + 1),
  }

  setPersons(persons.concat(personObject))
  setNewPerson('')
} else {
  alert(`${newName} is already added to phonebook`)
}
  }

  const handlePersonChange = (event) => {
    console.log(event.target.value, 'uusi nimi kentässä')
    setNewPerson(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input 
          value = {newName} 
          onChange={handlePersonChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map(person => {
        console.log('tässä listassa nimet',person.name);
        return  <li key={person.name}> {person.name}</li>
        })}

      </ul>

    </div>
  )

}

export default App
