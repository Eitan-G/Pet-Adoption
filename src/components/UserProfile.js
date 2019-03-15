import React from 'react'
import { RockerSwitch, MinMax } from './form_fields'

const UserProfile = props => {
    const {
        currentUser: { ageRange, profile, typePreference },
        updateUser, goToNextPet
    } = props
    const updateTypePreference = type => {
        updateUser('typePreference', type)
        goToNextPet()
    }
    const handleAgeChange = ( { target: { value } }, key) => {
        const newRange = key === 'min' ? { min: value, max: ageRange.max } : { min: ageRange.min, max: value }
        updateUser('ageRange', newRange)
        goToNextPet()
    }
    const handleTextChange = e => { updateUser('profile', e.target.value) }
    const options = ['cat', 'dog']
    return <div className='adopter-profile'>
        <div className='adopter-summary'>
            <h2>Adopter Profile</h2>
            <textarea value={profile} onChange={handleTextChange} className='adopter-blurb' />
        </div>
        <div className='adopter-preferences'>
            <h2>Preferences</h2>
            <div><RockerSwitch checked={typePreference === options[1]} onChange={updateTypePreference} title='Animal' options={options}/></div>
            <div><MinMax
                title='Age'
                min={ageRange.min}
                max={ageRange.max}
                handleMinChange={e => handleAgeChange(e, 'min')}
                handleMaxChange={e => handleAgeChange(e, 'max')}/>
            </div>
        </div>
    </div>
}

export default UserProfile