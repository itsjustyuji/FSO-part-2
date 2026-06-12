import { useState } from 'react'

const Show=({persons})=>{
  return(
    <>
    {persons.map(person=><div key={person.name}>{person.name} {person.number}</div>)}
    </>
  )
}

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

  const handleChange=(e)=>{
    setNewName(e.target.value)
  }

  const handleNumChange=(e)=>{
    setNewNum(e.target.value)
  }

  const handleFilterChange=(e)=>{
    setFilter(e.target.value)
  }

  const ToShow = persons.filter(person => 
    person.name.toLowerCase().includes(filter.toLowerCase())
  )

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        filter shown with <input value={filter} onChange={handleFilterChange}></input>
      </div>
      <h2>add a new</h2>
      <form onSubmit={clickSubmit}> 
        <div>
          name: <input value={newName} onChange={handleChange} />
        </div>
        <div>
          number: <input value={newNum} onChange={handleNumChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div><Show persons={ToShow} /></div>
    </div>
  )
}

export default App