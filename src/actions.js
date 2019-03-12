export const SET_ACTIVE_TAB = 'SET_ACTIVE_TAB'
export function setActiveTab(tab) {
    return {
        type: SET_ACTIVE_TAB,
        payload: {
            activeTab: tab,
        }
    }
}