import { useState, useEffect} from "react"
import { getPetById } from "../services/main/pets"
import { useParams } from "react-router-dom"
import { createOrUpdatePet } from "../services/main/pets"
const Show = ({match}) => {

   const [isEdit, setIsEdit] = useState(false)  

    const [pet, setPet] = useState({})  
    const { pet_id } = useParams();

    useEffect(() => {
      const fetchPet = async () => {
        try {
          const petData = await getPetById(pet_id);
          setPet(petData);
        } catch (error) {
          console.error(error);
        }
      };
      fetchPet();
    }, [pet_id]);

    if (!pet) {
      return <h2>Loading...</h2>;
    }

    function toggleEdit() {
      setIsEdit(!isEdit);
      console.log(isEdit);
    }

    const handleInputChange = (fieldName, value) => {
      if (isEdit) {
        setPet({ ...pet, [fieldName]: value });
      }
    };

    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const updatedPet = await createOrUpdatePet(pet);
        setPet(updatedPet);
        setIsEdit(false);
      } catch (error) {
        console.error(error);
      }
    };


  return (
<div> 
<div className="hero bg-base-200">
  <div className="hero-content text-center">
    <div className="max-w-md">
      <h1 className="text-5xl font-bold">{pet.name}</h1>
      <p className="py-6">I am a {pet.breed} and I was born in {pet.dateOfBirth}! So happy to meet you! 🐶 </p>
      <button className="btn btn-primary" onClick={toggleEdit}>Edit my details!</button>
    </div>
  </div>
</div>
<div className="pet-details" style={{display: "flex", alignContent: "center", justifyContent:"center"}}>
  <form style={{display: "flex", flexDirection:"column", padding: "1rem"}} onSubmit={handleSubmit}>
    <label htmlFor="name">Name</label>
    <input
  type="text"
  name="name"
  value={pet.name}
  disabled={!isEdit} 
  onChange={(e) => handleInputChange("name", e.target.value)}/>
    <label htmlFor="breed">Breed</label>
    <input type="text"
    name="breed"
    value={pet.breed}
    disabled={!isEdit}
    onChange={(e) => handleInputChange("breed", e.target.value)}/>
    <label htmlFor="dateOfBirth">Date of Birth</label>
    <input type="date"
    name="dateOfBirth"
    value={pet.dateOfBirth}
    disabled={!isEdit}
    onChange={(e) => handleInputChange("dateOfBirth", e.target.value)}/>
    <button className="btn btn-success" style={{margin: "1rem"}}>Edit Pet</button>
    </form>
</div>
</div>
  )
}
export default Show