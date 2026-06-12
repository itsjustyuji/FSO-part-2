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
    { 
      name: 'Arto Hellas',
      number: '040-1234567'
    }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNum, setNewNum] = useState('')

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
    console.log(e.target.value)
    setNewNum(e.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
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
      <div><Show persons={persons} /></div>
    </div>
  )
}

export default App