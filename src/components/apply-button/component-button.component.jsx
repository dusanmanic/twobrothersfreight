import React from 'react'

import './component-button.styles.css'

function ComponentButton({name}) {

    return(
        <div className='apply-button'>
            <button className='button'>{`${name}`}</button>
        </div>
    )
}

export default ComponentButton;