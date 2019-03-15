import React from 'react'
import capitalize from '../helpers/capitalize'

export const RockerSwitch = ({title, checked, onChange, options: [a, b]}) => {
    const handleRockerToggle = e => {
        const newPreference = e.target.checked ? b : a
        onChange(newPreference)
    }
    return <div className='rocker-switch'>
        <span className='preference-title'>{title}</span>
        <div className='options'>
            <span>{capitalize(a)}</span>
            <label className='switch'>
                <input checked={checked} onChange={handleRockerToggle} type='checkbox' />
                <span className='slider'></span>
            </label>
            <span>{capitalize(b)}</span>
        </div>
    </div>
}

export const MinMax = ({title, min, max, handleMinChange, handleMaxChange}) => {
    return <div className='min-max'>
        <span className='preference-title'>{title}</span>
        <div className='options'>
            <input value={min} placeholder='min' onChange={handleMinChange} type='number' min={0} />
            <input value={max} placeholder='max' onChange={handleMaxChange} type='number' min={0} />
        </div>
    </div>
}