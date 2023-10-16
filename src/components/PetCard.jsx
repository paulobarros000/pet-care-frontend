import React from 'react';
import { deletePet } from '../services/main/pets';
import { useGlobalContext } from '../context';
import { Link } from 'react-router-dom';

const PetCard = ({ pet }) => {

    const { removePet } = useGlobalContext();
    const { id, name, breed, dateOfBirth } = pet;


    return (
        <div className="card w-96 bg-primary text-primary-content" key={id}>
            <div className="card-body">
                <h2 className="card-title">It's.... {name}!</h2>
                <p>Breed: {breed}</p>
                <p>Birthday: {dateOfBirth}</p>
                <div className="card-actions justify-center">
                <Link to={`/pets/${pet.id}`}><button className="btn">View Details</button></Link>
                    <button className="btn btn-error" onClick={() => removePet(id)}>Delete Pet</button>
                </div>
            </div>
        </div>
    );
};

export default PetCard;
