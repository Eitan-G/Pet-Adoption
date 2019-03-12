import { SET_ACTIVE_TAB } from "../actions"
import { NAVIGATION } from "../constants";
import pets from "../pets.json"
import settings from "../settings.json"

const initialState = {
    currentUser: {
        ...settings
    },
    pets,
    activePetId: pets[0] && pets[0].id,
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

export default function rootReducer(state = initialState, action) {
    return {
        ...state,
        activeTab: navigation(state.activeTab, action)
    }
}