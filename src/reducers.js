import { SET_CLICKED_PET, SET_ACTIVE_TAB, SAVE_CURRENT_PET, GO_TO_NEXT_PET, UPDATE_USER } from "./actions"
import { NAVIGATION } from "./constants";
import pets from "./pets.json"
import settings from "./settings.json"
import { getActiveTab, getActivePetId, getCurrentUser, getSavedPetIds, getVisiblePets, getNextPet, getClickedPetId } from "./selectors";
import getInitialPet from "./helpers/get_initial_pet";

const initialState = {
    currentUser: { ...settings },
    pets,
    activePetId: getInitialPet(pets, settings),
    savedPets: [],
    activeTab: NAVIGATION.SEARCH,
    clickedPetId: null
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
    const visiblePets = getVisiblePets(state)

    switch(action.type) {
        case GO_TO_NEXT_PET: {
            if (visiblePets.length === 0) { return }
            const nextPet = getNextPet(state)
            return nextPet ? nextPet.id : visiblePets[0].id
        }
        default:
            return activePetId
    }
}

function savePet(state, action) {
    const activePetId = getActivePetId(state)
    const savedPets = getSavedPetIds(state)
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
    const user = { ...state }
    switch(type) {
        case UPDATE_USER:
            user[payload.key] = payload.value
            return user
        default:
            return state
    }
}

function clickedPet(state, action) {
    switch(action.type) {
        case SET_CLICKED_PET:
            return action.payload.id
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
        clickedPetId: clickedPet(getClickedPetId(state), action)
    }
}