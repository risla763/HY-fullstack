import React, { useState, useEffect } from 'react';
import axios from 'axios'
import FilterForm from './FilterForm';
import AddPersonForm from './AddPersonForm';
import ListOfPersons from './ListOfPersons';
import personsService from './services/persons'


const App = () => {

  const [persons, setPersons] = useState([]) 

  useEffect(() => {
    personsService.getAll().then(response => {
      console.log('promise fulfilled', personsService.getAll())
      setPersons(response.data)
    }
      )
  }, [])

  const [newName, setNewPerson] = useState('')
  const [newNumber,setNewNumber] = useState('')
  const [searchPerson, setNewSearchPerson] = useState('')
  const [showAll, setShowAll] = useState(false)

  const personsToShow = showAll
      ? persons
      : persons.filter(person => 
        person.name.toLowerCase().includes(searchPerson.toLowerCase())  ||
        person.number.includes(searchPerson)
        )
      
  const handleDelete = (id) => {
    const idfind = id
    const personfound = persons.find(person => person.id === idfind)
    if (window.confirm(`${personfound.name} Delete?`)) 
      personsService.delete(id)
      .then(() => {
          setPersons(persons.filter(person => person.id !== id))
        })
        .catch(error => {
            console.error('Error deleting person:', error);
        })
    }

  const addPerson = (event) => {
    event.preventDefault()

    const IsInList = persons.some(person => person.name === newName)

    if (!IsInList) {
      const personObject = {
        name: newName,
        number: newNumber,
        id: String(persons.length + 1),
      }

      axios
      personsService.create(personObject)
      .then(response => {
        console.log('uusi objekti tietokantaan', personObject)
        setPersons(persons.concat(personObject))
        setNewPerson('')
        setNewNumber('')
      })
    } else {
      (window.confirm(`${newName} is already added in phonebook, replace the old number with a new one?`)); {
          const person = persons.find(person => person.name === newName)
          const UpdatedPerson = { name: newName, number: newNumber, id: String(person.id)}
          console.log("update the object", UpdatedPerson)

          personsService.update(person.id, UpdatedPerson).then(
            response => {
              setPersons(persons.map(person => person.id === IsInList.id ? response.data : person))
            }
          )
         }
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
      handleDelete={handleDelete}
      />
    </div>
  )

};

export default App;
