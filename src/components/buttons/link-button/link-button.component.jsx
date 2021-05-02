import React from 'react'
import {Link } from "react-router-dom";

import './link-button.styles.css'

function LinkButton({to, name}) {

    const scrollTop = () => {
        document.body.scrollTop = (window.innerHeight * 15 / 100);
        document.documentElement.scrollTop = (window.innerHeight * 15 / 100);
    }

    return(
        <div className='link-button-wrapper'>
            <Link className='link-button' to={to} onClick={scrollTop}>{`${name}`}</Link>
        </div>
    )
}

export default LinkButton;