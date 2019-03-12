export const SET_ACTIVE_TAB = 'SET_ACTIVE_TAB'
export function setActiveTab(tab) {
    return {
        type: SET_ACTIVE_TAB,
        payload: {
            activeTab: tab,
        }
    }
}

export const SET_ACTIVE_PET = 'SET_ACTIVE_PET'
export const setActivePet = () => ({ type: SET_ACTIVE_PET })

export const SAVE_CURRENT_PET = 'SAVE_CURRENT_PET'
export const saveCurrentPet = () => ({ type: SAVE_CURRENT_PET })