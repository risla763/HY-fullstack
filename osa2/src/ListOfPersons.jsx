import React from 'react';

const ListOfPersons = ({ personsToShow }) => {
  return (
    <ul>
    {personsToShow.map(person => {
    console.log('tässä listassa nimet',person.name);
    return  <li key={person.name}> {person.name} {person.number}</li>
    })}
  </ul>
  )
}

export default ListOfPersons;