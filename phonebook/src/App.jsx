import { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import personService from './services/persons'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNum, setNewNum] = useState('')
  const [filter, setFilter]=useState('')

  useEffect(() => {
    personService.getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
  }, [])
  console.log('render', persons.length, 'notes')

  const clickSubmit = (e) => {
  e.preventDefault()
  const trimmedName = newName.trim()

  if (trimmedName === '') return

  const existingPerson=persons.find(person => (person.name.toLowerCase() === trimmedName.toLowerCase())) 
  if(existingPerson){
    const result=window.confirm(`${trimmedName} is already added to phonebook, replace the old number with a new one?`)
    if(result===true){
      const updatePersonsObject={
        name: trimmedName,
        number: newNum
      }
      personService.update(existingPerson.id,updatePersonsObject)
      .then(returnedPersons => {
        setPersons(persons.map(person => person.id === existingPerson.id ? returnedPersons : person))
      })
    }
    else{
      console.log(`Rejected`)
    }
  } else {
    const personsObject = {
      name: trimmedName,
      number: newNum
    }

    personService.create(personsObject)
      .then(returnedPersons => {
        setPersons(persons.concat(returnedPersons))
      })
  }
  setNewName('')
  setNewNum('')
}

const deletePerson=(id,name)=> {
  if (window.confirm(`Delete ${name}?`)) {
    personService
      .remove(id)
      .then(() => {
        setPersons(persons.filter(p=>p.id!==id))
      })
  }
}

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={filter} setFilter={setFilter} />
      <h3>add a new</h3>
      <PersonForm onSubmit={clickSubmit} 
      name={newName} 
      handleChange={(e)=>setNewName(e.target.value)}
      number={newNum}
      handleNumChange={(e)=>setNewNum(e.target.value)} 
  />
      <h3>Numbers</h3>
      <Persons filter={filter} persons={persons} deletePerson={deletePerson} />
    </div>
  )
}

export default App