import React from 'react'
import { NAVIGATION } from "../constants";

const PetProfile = props => {
    const { pet, size } = props

    const petImage = <div className='img-container' ><img src={pet.img} alt='Your pet here' /></div>
    const petInfo = <div className='info'><span>{`${pet.name}, ${pet.age}yr, ${pet.sex}`}</span></div>
    const petSummary = <div className='summary'>{pet.profile}</div>

    return <div className={`pet-profile-${size}`}>
       {petImage}
       {petInfo}
       {petSummary}
    </div>
}

export default PetProfile