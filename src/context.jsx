import { useContext, useReducer, useEffect, createContext } from "react";
import { createOrUpdatePet, deletePet, getAllPets, getPetById } from "./services/main/pets"
import { GET_ALL_PETS } from "./services/main/actions";
import reducer from "./services/main/reducer";

const AppContext = createContext()

const fetchPetsUrl = "http://localhost:8000/api/pets"

const initialState = {
    pets: new Map(),
    isLoading: true,
    isError: false,
    }

export const AppProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(fetchPetsUrl);
                const pets = await response.json();
                dispatch({ type: GET_ALL_PETS, payload: pets });
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();

    }, []);

    // const updatePet = async (data) => {
    //     const petUpdated = await createOrUpdatePet(data)
    //     dispatch({type: UPDATE_PET, payload: petUpdated})
    // }

    const removePet = async (id) => {
        await deletePet(id)
        dispatch({type: DELETE_PET, payload: {id}})
    }

    return (
        <AppContext.Provider value={{...state, pets: state.pets, removePet}}>
            {children}
        </AppContext.Provider>
    )

}

export const useGlobalContext = () => { 
    return useContext(AppContext)
}