import { createSelector } from 'reselect'

export const getCurrentUser = state => state.currentUser
export const getAllPets = state => state.pets
export const getSavedPets = state => state.savedPets
export const getActivePetId = state => state.activePetId
export const getActiveTab = state => state.activeTab

const getPreferences = createSelector(
    getCurrentUser,
    user => ({ type: user.typePreference, age: user.ageRange })
)

export const getVisiblePets = createSelector(
    [getPreferences, getAllPets],
    (preferences, allPets) => {
        const { type, age } = preferences
        return allPets.filter(
            pet => pet.type === type && pet.age >= age.min && pet.age <= age.max
        )
    }
)

export const getCurrentPet = createSelector(
    [getVisiblePets, getActivePetId],
    (pets, id) => pets.find(pet => pet.id === id)
)

export const getNextPet = createSelector(
    [getVisiblePets, getActivePetId],
    (pets, id) => {
        const activePetIndex = pets.findIndex(pet => pet.id === id)
        return pets[activePetIndex + 1]
    }
)