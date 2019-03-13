import React from 'react'
const PetProfile = props => {
    const { pet, size } = props

    const petImage = <div className='img-container' ><img src={pet.img} alt='Your pet here' /></div>
    const petInfo = <div className='info'><span>{`${pet.name}, ${pet.age}yr, ${pet.sex}`}</span></div>
    const petBlurb = <div className='blurb'>{pet.profile}</div>

    return <div className={`pet-profile-${size}`}>
        {petImage}
        <div className='summary'>
            {petInfo}
            {petBlurb}
        </div>
    </div>
}

export default PetProfile