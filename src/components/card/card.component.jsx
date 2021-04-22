import React from 'react'

import './card.styles.css'

function Card({ image, text }) {

    return(
        <div className='card anim-1'>
            <img src={`${image}`} alt=""/>
            <div className="text-holder">
            <span>{`${text}`}</span>
            </div>
        </div>
    )
}

export default Card;