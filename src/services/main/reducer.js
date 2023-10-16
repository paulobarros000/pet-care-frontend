import { GET_ALL_PETS } from "./actions";

const reducer = (state, action) => {
    switch (action.type) {
        case GET_ALL_PETS:
            const newPets = new Map(action.payload.map(pet => [pet.id, pet]));
            return { ...state, pets: newPets };
        case ADD_PET:
          
        case DELETE_PET:
            return { ...state, pets: state.pets.delete(action.payload) };
        default:
            return state; 
    }
};

export default reducer;
