import { useState } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('')
  const [newNum, setNewNum] = useState('')
  const [filter, setFilter]=useState('')

  const clickSubmit=(e)=>{
    e.preventDefault()
    const trimmedName = newName.trim()

    if (trimmedName==='') {
    return
  }
    if (persons.some(person => person.name.toLowerCase() === trimmedName.toLowerCase())) {
    window.alert(`${trimmedName} is already added to phonebook`)
  } else {
    const personsObject = {
    name: trimmedName,
    number: newNum,
    id: String(persons.length + 1),
    }
    setPersons(persons.concat(personsObject))
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