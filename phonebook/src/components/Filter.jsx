const Filter=({filter, setFilter})=>{
  const handleFilterChange=(e)=>{
  setFilter(e.target.value)
}
  return(
    <div>
        filter shown with <input value={filter} onChange={handleFilterChange}></input>
    </div>
  )
}

export default Filter