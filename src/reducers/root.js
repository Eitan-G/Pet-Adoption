import { SET_ACTIVE_TAB, SAVE_CURRENT_PET, GO_TO_NEXT_PET, SET_ACTIVE_PET, UPDATE_USER } from "../actions"
import { NAVIGATION } from "../constants";
import pets from "../pets.json"
import settings from "../settings.json"
import { getActiveTab, getActivePetId, getCurrentUser, getSavedPets, getVisiblePets } from "../selectors";
import getInitialPet from "../helpers/get_initial_pet";

const initialState = {
    currentUser: { ...settings },
    pets,
    activePetId: getInitialPet(pets, settings),
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
    const activePetId = getActivePetId(state)
    const filteredPets = getVisiblePets(state)
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
            return activePetId
    }
}

function savePet(state, action) {
    const activePetId = getActivePetId(state)
    const savedPets = getSavedPets(state)
    switch(action.type) {
        case SAVE_CURRENT_PET: {
            const newSet = new Set(savedPets).add(activePetId)
            return newSet
        }
        default:
            return savedPets
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
        currentUser: user(getCurrentUser(state), action),
    }
}