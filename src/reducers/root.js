import { SET_ACTIVE_TAB } from "../actions"
import { NAVIGATION } from "../constants";


const initialState = {
    currentUser: {
        id: null,
        profile: "",
        preferences: {
            type: "",
            age: { min: 0, max: Infinity },
        },
    },
    pets: [],
    activePetId: null,
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