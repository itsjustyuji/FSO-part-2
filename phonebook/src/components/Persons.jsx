import personService from "../services/persons"

const Persons=({filter, persons, deletePerson})=>{
  const ToShow = persons.filter(person => 
    person.name.toLowerCase().includes(filter.toLowerCase())
  )
  return(
    <div>
    {ToShow.map(shown=><div key={shown.id}>{shown.name} {shown.number} {" "}<button onClick={()=>deletePerson(shown.id, shown.name)}>delete</button></div>)}
    </div>
  )
}

export default Persons