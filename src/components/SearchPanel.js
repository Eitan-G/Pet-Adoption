import React from 'react'
import PetProfile from './PetProfile'

const SearchPanel = props => {
    return <div>
       <PetProfile pet={props.pet} size='large' />
    </div>
}

export default SearchPanel