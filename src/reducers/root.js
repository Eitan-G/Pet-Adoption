import { SET_ACTIVE_TAB, SAVE_CURRENT_PET, UPDATE_AGE_PREFERENCE, GO_TO_NEXT_PET } from "../actions"
import { NAVIGATION } from "../constants";
import pets from "../pets.json"
import settings from "../settings.json"

const savedPets = JSON.parse(localStorage.getItem('savedPets'))
const { typePreference, ageRange: { max, min } } = settings

const filteredPets = pets.filter(
    pet => pet.type === typePreference && pet.age >= min && pet.age <= max
)

const initialState = {
    currentUser: {
        ...settings
    },
    pets: filteredPets,
    activePetId: filteredPets[0].id,
    savedPets: new Set(savedPets),
    activeTab: NAVIGATION.SEARCH,
}

function navigation(state, action) {
    switch(action.type) {
        case SET_ACTIVE_TAB:
            return action.payload.activeTab
        default:
            return state
    }
}

function activePet(state, action) {
    let { pets, activePetId } = state
    const filteredPets = pets.filter(
        pet => pet.type === typePreference && pet.age >= min && pet.age <= max
    )
    const activePetIndex = filteredPets.findIndex(pet => pet.id === activePetId)

    switch(action.type) {
        case GO_TO_NEXT_PET: {
            const nextPet = filteredPets[activePetIndex + 1]
            return nextPet ? nextPet.id : null
        }
        default:
            return state.activePetId
    }
}

function savePet(state, action) {
    switch(action.type) {
        case SAVE_CURRENT_PET: {
            const { savedPets, activePetId } = state
            const newSet = new Set(savedPets).add(activePetId)
            localStorage.setItem('savedPets', JSON.stringify([...newSet]))
            return newSet
        }
        default:
            return state.savedPets
    }
}

function user(state, action) {
    const { type, payload } = action
    switch(type) {
        case UPDATE_AGE_PREFERENCE: {
            const newState = { ...state }
            newState.ageRange[payload.type] = payload.value
            return newState
        }
        default:
            return state
    }
}

export default function rootReducer(state = initialState, action) {
    return {
        ...state,
        savedPets: savePet(state, action),
        activePetId: activePet(state, action),
        activeTab: navigation(state.activeTab, action),
        currentUser: user(state.currentUser, action),
    }
}