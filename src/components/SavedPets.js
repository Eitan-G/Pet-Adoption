import React from 'react'
import PetProfile from './PetProfile';

const SavedPets = ({ openPetModal, pets }) => {
    const buildPetBlurb = (pet, i) => <li onClick={() => openPetModal(pet.id)} key={`savedPet-${i}`}>
        <PetProfile pet={pet} size='small' />
    </li>
    return <ol className='saved-pets-list'>
        {pets.map((pet, i) => buildPetBlurb(pet, i))}
    </ol>
}

export default SavedPets