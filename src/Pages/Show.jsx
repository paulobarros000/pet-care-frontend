import { useState, useEffect} from "react"
import { getPetById } from "../services/main/pets"
import { useParams } from "react-router-dom"
const Show = ({match}) => {
   
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

    if(!pet)
    {
        return <h2>Loading...</h2>
    }


  return (
<div className="hero min-h-screen bg-base-200">
  <div className="hero-content text-center">
    <div className="max-w-md">
      <h1 className="text-5xl font-bold">{pet.name}</h1>
      <p className="py-6">I am a {pet.breed} and I was born in {pet.dateOfBirth}! So happy to meet you! 🐶 </p>
      <button className="btn btn-primary">Edit my details!</button>
    </div>
  </div>
</div>
  )
}
export default Show