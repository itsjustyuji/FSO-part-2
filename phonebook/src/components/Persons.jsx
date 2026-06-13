const Persons=({filter, persons})=>{
  const ToShow = persons.filter(person => 
    person.name.toLowerCase().includes(filter.toLowerCase())
  )
  return(
    <div>
    {ToShow.map(shown=><div key={shown.name}>{shown.name} {shown.number}</div>)}
    </div>
  )
}

export default Persons