import React from 'react'
import { RockerSwitch, MinMax } from './form_fields'

const UserProfile = props => {
    const {
        currentUser: { ageRange, profile, typePreference },
        updateAgePreference, updateTypePreference
    } = props

    const handleMinChange = e => { updateAgePreference('min', parseInt(e.target.value)) }
    const handleMaxChange = e => { updateAgePreference('max', parseInt(e.target.value)) }
    const options = ['cat', 'dog']
    return <div className='adopter-profile'>
        <div className='adopter-summary'>
            <h2>Adopter Profile</h2>
            <div className='adopter-blurb'>
                {profile}
            </div>
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