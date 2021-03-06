import React from 'react'
import PetProfile from './PetProfile';

const SavedPets = ({ pets, openPetDetails }) => {
    const buildPetBlurb = (pet, i) =>
        <li onClick={() => openPetDetails(pet.id)} key={`savedPet-${i}`}>
            <PetProfile pet={pet} size='small' />
        </li>
    const noSavedPetsMessage = <div className='no-saved-pets'>
        You haven't saved any pets. Go search for some pets to adopt!
    </div>
    const petsList = <ol className='saved-pets-list'>
        {pets.map((pet, i) => buildPetBlurb(pet, i))}
    </ol>
    return pets.length > 0 ? petsList : noSavedPetsMessage
}

export default SavedPets