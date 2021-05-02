import React from 'react'

import './section.styles.css'

export default function SectionComponent({ label, name, options, handleChange }) {
    return (
        <div className="select-input-wrapper">
            <label className="joinus-label">{label}</label>
            <select className="joinus-select" name={name} onChange={handleChange} >
                <option value="notselected"></option>
                {
                    options.map( (option, index) => 
                        <option key={index} value={option}>{option}</option>
                    )
                }
            </select>
        </div>
    )
}