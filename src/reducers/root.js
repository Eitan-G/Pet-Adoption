import { SET_ACTIVE_TAB, SAVE_CURRENT_PET, SET_ACTIVE_PET, UPDATE_AGE_PREFERENCE } from "../actions"
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
    activePet: 0, //considered having this be pet id but index works better for navigation
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
    let { pets, activePet } = state

    switch(action.type) {
        case SET_ACTIVE_PET:
            return activePet < pets.length ? activePet + 1 : 0
        default:
            return state.activePet
    }
}

function savePet(state, action) {
    switch(action.type) {
        case SAVE_CURRENT_PET: {
            const { savedPets, activePet } = state
            const newSet = new Set(savedPets).add(activePet)
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
        activePet: activePet(state, action),
        activeTab: navigation(state.activeTab, action),
        currentUser: user(state.currentUser, action),
    }
}