import { createSelector } from 'reselect'

export const getCurrentUser = state => state.currentUser
export const getAllPets = state => state.pets
export const getSavedPetIds = state => state.savedPets
export const getActivePetId = state => state.activePetId
export const getActiveTab = state => state.activeTab

export const getPreferences = createSelector(
    getCurrentUser,
    user => ({ typePreference: user.typePreference, ageRange: user.ageRange })
)

export const getVisiblePets = createSelector(
    [getPreferences, getAllPets],
    (preferences, allPets) => {
        const { typePreference, ageRange } = preferences
        return allPets.filter(
            pet => pet.type === typePreference && pet.age >= ageRange.min && pet.age <= ageRange.max
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

export const getSavedPetDetails = createSelector(
    [getAllPets, getSavedPetIds],
    (allPets, savedIds) => {
        return [...savedIds].map(id => allPets.find(pet => pet.id === id))
    }
)