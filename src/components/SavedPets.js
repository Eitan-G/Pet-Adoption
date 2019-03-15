import React from 'react'
import PetProfile from './PetProfile';

const SavedPets = props => {
    const buildPetBlurb = (pet, i) => <li key={`savedPet-${i}`}>
        <PetProfile pet={pet} size='small' />
    </li>
    return <ol className='saved-pets-list'>
        {props.pets.map((pet, i) => buildPetBlurb(pet, i))}
    </ol>
}

export default SavedPets