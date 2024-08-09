import React, { useState } from 'react';

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '102' }
  ]) 

  const [newName, setNewPerson] = useState('')
  const [newNumber,setNewNumber] = useState('')

  const addPerson = (event) => {
  event.preventDefault()

  const IsInList = persons.some(person => person.name === newName)
  console.log('TARKISTUS', IsInList )
  console.log('LISTA', persons)

  if (!IsInList) {
  const personObject = {
    name: newName,
    number: newNumber,
    id: String(persons.length + 1),
  }

  setPersons(persons.concat(personObject))
  setNewPerson('')
  setNewNumber('')
} else {
  alert(`${newName} is already added to phonebook`)
}
  }

  const handlePersonChange = (event) => {
    console.log(event.target.value, 'uusi nimi kentässä')
    setNewPerson(event.target.value)
  }

  const handleNumberChange = (event) => {
    console.log(event.target.value, 'uusi number kentässä')
    setNewNumber(event.target.value)
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
        <div>number: <input 
        value = {newNumber}
        onChange={handleNumberChange}/></div>
        <div><button type="submit">add</button></div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map(person => {
        console.log('tässä listassa nimet',person.name);
        return  <li key={person.name}> {person.name} {person.number}</li>
        })}

      </ul>

    </div>
  )

}

export default App
