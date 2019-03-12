import { SET_ACTIVE_TAB, SAVE_CURRENT_PET, SET_ACTIVE_PET } from "../actions"
import { NAVIGATION } from "../constants";
import pets from "../pets.json"
import settings from "../settings.json"

const { typePreference, ageRange: { max, min } } = settings

const filteredPets = pets.filter(
    pet => pet.type === typePreference && pet.age >= min && pet.age <= max
)

const initialState = {
    currentUser: {
        ...settings
    },
    pets: filteredPets,
    activePet: 0, //considered having this be pet id but index works better for navigation
    savedPets: new Set(),
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
    let { pets, activePet } = state

    switch(action.type) {
        case SET_ACTIVE_PET:
            return activePet < pets.length - 1 ? activePet + 1 : null
        default:
            return state.activePet
    }
}

function savePet(state, action) {
    switch(action.type) {
        case SAVE_CURRENT_PET: {
            const { savedPets, activePet } = state
            return new Set(savedPets).add(activePet)
        }
        default:
            return state.savedPets
    }
}

export default function rootReducer(state = initialState, action) {
    return {
        ...state,
        savedPets: savePet(state, action),
        activePet: activePet(state, action),
        activeTab: navigation(state.activeTab, action)
    }
}