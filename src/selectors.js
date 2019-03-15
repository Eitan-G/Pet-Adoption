import { createSelector } from 'reselect'

export const getCurrentUser = state => state.currentUser
const getAllPets = state => state.pets
const getSavedPets = state => state.savedPets
export const getActivePetId = state => state.activePetId
export const getActiveTab = state => state.activeTab