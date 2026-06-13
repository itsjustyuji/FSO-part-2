const PersonForm=({onSubmit,name,handleChange,number,handleNumChange})=>{
  return(
    <form onSubmit={onSubmit}> 
      <div>
        name: <input value={name} onChange={handleChange} />
      </div>
      <div>
        number: <input value={number} onChange={handleNumChange}/>
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  )
}

export default PersonForm