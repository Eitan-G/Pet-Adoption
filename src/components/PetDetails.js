import React from 'react'
import PetProfile from './PetProfile'

 const PetDetails = ({ pet }) => {
    return <PetProfile pet={pet} size='large' />
}

 export default PetDetails