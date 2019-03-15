import React from 'react'
import { RockerSwitch, MinMax } from './form_fields'

const UserProfile = props => {
    const {
        currentUser: { ageRange, profile, typePreference },
        updateAgePreference, updateTypePreference, updateProfile
    } = props

    const handleMinChange = e => { updateAgePreference('min', parseInt(e.target.value)) }
    const handleMaxChange = e => { updateAgePreference('max', parseInt(e.target.value)) }
    const handleTextChange = e => { updateProfile(e.target.value) }
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
                handleMinChange={handleMinChange}
                handleMaxChange={handleMaxChange}/>
            </div>
        </div>
    </div>
}

export default UserProfile