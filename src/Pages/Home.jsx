import { getAllPets } from "../services/main/pets";
import { useState, useEffect } from "react";
import { useGlobalContext } from "../context";
import PetCard from "../components/PetCard";
import { Link } from "react-router-dom";

const Home = () => {
  const { pets } = useGlobalContext();
  const [searchResults, setSearchResults] = useState([]);
  
  

  const petsArray = Array.from(pets.values());

    



  if (petsArray.length === 0) return <h1>Loading...</h1>;

  return (
    <div>
      <div
        className="button-section"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <Link to="/add">
          <button className="btn btn-success">Add Pet</button>
        </Link>
      </div>
      <div className="search/-div">
        <input
          type="text"
          placeholder="Search"
          className="input input-bordered w-24 md:w-auto"
        />
        <button className="btn btn-ghost btn-circle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
      </div>
      <section style={{ textAlign: "center" }}>
        <header style={{ textAlign: "center" }}>
          <h1
            style={{
              fontWeight: "bold",
              fontSize: "4vh",
              marginBottom: "2rem",
            }}
          >
            Our Pets
          </h1>
        </header>
        <div className="grid grid-cols-3 gap-4">
          {petsArray.map((pet) => (
            <PetCard key={pet.id} pet={pet} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
