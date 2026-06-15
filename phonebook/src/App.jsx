import { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNum, setNewNum] = useState('')
  const [filter, setFilter]=useState('')

  useEffect(() => {
    console.log('effect')
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('promise fulfilled')
        setPersons(response.data)
      })
  }, [])
  console.log('render', persons.length, 'notes')

  const clickSubmit = (e) => {
  e.preventDefault()
  const trimmedName = newName.trim()

  if (trimmedName === '') return

  if (persons.some(person => person.name.toLowerCase() === trimmedName.toLowerCase())) {
    window.alert(`${trimmedName} is already added to phonebook`)
  } else {
    // 1. Remove the 'id' field completely from your local object
    const personsObject = {
      name: trimmedName,
      number: newNum
    }

    axios
      .post('http://localhost:3001/persons', personsObject)
      .then(response => {
        // 2. Use response.data because it includes the server-generated ID!
        setPersons(persons.concat(response.data))
      })
  }
  setNewName('')
  setNewNum('')
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
      <Persons filter={filter} persons={persons} />
    </div>
  )
}

export default App