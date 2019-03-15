import { SET_ACTIVE_TAB, SAVE_CURRENT_PET, GO_TO_NEXT_PET, SET_ACTIVE_PET, UPDATE_USER } from "../actions"
import { NAVIGATION } from "../constants";
import pets from "../pets.json"
import settings from "../settings.json"
import { getActiveTab } from "../selectors";

const { typePreference, ageRange: { max, min } } = settings

const filteredPets = pets.filter(
    pet => pet.type === typePreference && pet.age >= min && pet.age <= max
)

const initialState = {
    currentUser: { ...settings },
    pets,
    activePetId: filteredPets[0].id,
    savedPets: [],
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
    let { pets, activePetId, currentUser: { typePreference, ageRange: { min, max } } } = state
    const filteredPets = pets.filter(
        pet => pet.type === typePreference && pet.age >= min && pet.age <= max
    )
    const activePetIndex = filteredPets.findIndex(pet => pet.id === activePetId)

    switch(action.type) {
        case GO_TO_NEXT_PET: {
            if (filteredPets.length === 0) { return }
            const nextPet = filteredPets[activePetIndex + 1]
            return nextPet ? nextPet.id : filteredPets[0].id
        }
        case SET_ACTIVE_PET: {
            return action.payload.id
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
            return newSet
        }
        default:
            return state.savedPets
    }
}

function user(state, action) {
    const { type, payload } = action
    const newState = { ...state }
    switch(type) {
        case UPDATE_USER:
            newState[payload.key] = payload.value
            return newState
        default:
            return state
    }
}

export default function rootReducer(state = initialState, action) {
    return {
        ...state,
        savedPets: savePet(state, action),
        activePetId: activePet(state, action),
        activeTab: navigation(getActiveTab(state), action),
        currentUser: user(state.currentUser, action),
    }
}