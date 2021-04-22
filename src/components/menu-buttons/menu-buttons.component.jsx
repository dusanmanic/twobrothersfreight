import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import { ShowHideContext } from '../../context/show-hide.context';

import './menu-buttons.styles.css'

function MenuButtons () {
    const {showhide, setShowhide} = useContext(ShowHideContext)  

    function handleClick() {
        setShowhide('menu-hide')
    }
  
    return(
        <div className={`menu-buttons ${showhide}`}>
            <div className='buttons-holder'>
                <Link className='link-btn' to='/' >Home</Link>
                <Link className='link-btn' to='/about-us' >About us</Link>
                <Link className='link-btn' to='/services' >Services</Link>
                <Link className='link-btn' to='/join-us' >Join us</Link>
                <Link className='link-btn' to='/contact' onClick={handleClick}>Contact</Link>
                <Link className='link-btn' to='/sign-in' >Sign in</Link>
            </div>
        </div>
    )
}

export default MenuButtons;