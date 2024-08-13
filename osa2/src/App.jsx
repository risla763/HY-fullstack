import React, { useState } from 'react';
import FilterForm from './FilterForm';
import AddPersonForm from './AddPersonForm';
import ListOfPersons from './ListOfPersons';



const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ]) 

  const [newName, setNewPerson] = useState('')
  const [newNumber,setNewNumber] = useState('')
  const [searchPerson, setNewSearchPerson] = useState('')
  const [showAll, setShowAll] = useState(false)

  const personsToShow = showAll
      ? persons
      : persons.filter(person => 
        person.name.toLowerCase().includes(searchPerson.toLowerCase())  ||
        person.number.includes(searchPerson))
      

  const addPerson = (event) => {
    event.preventDefault()

    const IsInList = persons.some(person => person.name === newName)

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
  
  
  const handleSearchChange = (event) => {
    setNewSearchPerson(event.target.value);
  }
  

  return (
    <div>
      <h2>Phonebook</h2>
      <FilterForm 
      searchPerson={searchPerson}
      handleSearchChange={handleSearchChange}
      />
      <h3>Add a new</h3>
      <AddPersonForm
      newName = {newName}
      newNumber = {newNumber}
      handlePersonChange= {handlePersonChange}
      addPerson={addPerson}
      handleNumberChange={handleNumberChange}
      />
      <h3>Numbers</h3>
      <ListOfPersons
      personsToShow = {personsToShow}
      />
    </div>
  )

};

export default App;
