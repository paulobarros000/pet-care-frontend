import { getAllPets } from "../services/main/pets"
import { useState, useEffect } from "react"
import { useGlobalContext } from "../context"
import PetCard from "../components/PetCard"
import { Link } from "react-router-dom"


const Home = () => {
    const {pets} = useGlobalContext()

    const petsArray = Array.from(pets.values())

    if(petsArray.length === 0) return (<h1>Loading...</h1> 
    )

    return (
        <div>
            <div className="button-section" style={{display: "flex", justifyContent: "center"}}>
                <Link to="/add">
                    <button className="btn btn-success">Add Pet</button>
                </Link>
            </div>
            <section style={{textAlign: "center"}}>
                <header style={{ textAlign: 'center' }}>
                    <h1 style={{ fontWeight: 'bold', fontSize: '4vh', marginBottom: '2rem' }}>Our Pets</h1>
                </header>
                <div className="grid grid-cols-3 gap-4">
                    {petsArray.map((pet) => (
                        <PetCard key={pet.id} pet={pet} />
                    ))}
                </div>
            </section>
        </div>
    )
}


export default Home