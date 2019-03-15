import React from 'react'
import PetProfile from './PetProfile'
import { NAVIGATION } from '../constants'

 const PetDetails = ({ pet, setActiveTab }) => {
    const handleBackClick = () => setActiveTab(NAVIGATION.SAVED)
    return <div className='pet-details-container'>
        <div className='back-to-saved look-like-link' onClick={handleBackClick} ></div>
        <PetProfile pet={pet} size='large' />
    </div>
}

 export default PetDetails