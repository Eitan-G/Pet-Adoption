const getInitialPet = (allPets, currentUser) => {
    const { typePreference, ageRange: { max, min } } = currentUser
    return allPets.find(
        pet => pet.type === typePreference && pet.age >= min && pet.age <= max
    ).id
}

export default getInitialPet