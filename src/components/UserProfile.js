import React from 'react'
import { RockerSwitch, MinMax } from './form_fields'

const UserProfile = props => {
    const {
        currentUser: { ageRange, profile },
        updateAgePreference,
    } = props

    const handleMinChange = e => { updateAgePreference('min', parseInt(e.target.value)) }
    const handleMaxChange = e => { updateAgePreference('max', parseInt(e.target.value)) }

    return <div className='adopter-profile'>
        <div className='adopter-summary'>
            <h2>Adopter Profile</h2>
            <div className='adopter-blurb'>
                {profile}
            </div>
        </div>
        <div className='adopter-preferences'>
            <h2>Preferences</h2>
            <div><RockerSwitch title='Animal' options={['Cat', 'Dog']}/></div>
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