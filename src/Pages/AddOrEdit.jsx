import React, { useState } from 'react'
import { createOrUpdatePet } from '../services/main/pets'
const AddOrEdit = () => {

  const [petData, setPetData] = useState({
    name: "",
    dateOfBirth: "",
    breed: "",
  })

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setPetData({ ...petData, [name]: value })
  }

  const handleSubmit = async (event) => { 
    try {
      event.preventDefault()
      await createOrUpdatePet(petData)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      <div> 
      <h1>Add</h1>
      </div>
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem", margin: "2rem"}}>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" value={petData.name} onChange={handleInputChange} />
        <label htmlFor="dateOfBirth">Date of Birth</label>
        <input type="date" name="dateOfBirth" value={petData.dateOfBirth} onChange={handleInputChange} />
        <label htmlFor="breed">Breed</label>
        <input type="text" name="breed" value={petData.breed} onChange={handleInputChange} />
        <button type="submit" className='btn btn-success'>Add Pet</button>
      </form>
    </div>

  )
}
export default AddOrEdit