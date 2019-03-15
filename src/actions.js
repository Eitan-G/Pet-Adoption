export const SET_ACTIVE_TAB = 'SET_ACTIVE_TAB'
export function setActiveTab(tab) {
    return {
        type: SET_ACTIVE_TAB,
        payload: {
            activeTab: tab,
        }
    }
}

export const GO_TO_NEXT_PET = 'GO_TO_NEXT_PET'
export const goToNextPet = () => ({ type: GO_TO_NEXT_PET })

export const SAVE_CURRENT_PET = 'SAVE_CURRENT_PET'
export const saveCurrentPet = () => ({ type: SAVE_CURRENT_PET })

export const UPDATE_AGE_PREFERENCE = 'UPDATE_AGE_PREFERENCE'
export const updateAgePreference = (key, value) => {
    return {
        type: UPDATE_AGE_PREFERENCE,
        payload: {
            type: key,
            value
        }
    }
}