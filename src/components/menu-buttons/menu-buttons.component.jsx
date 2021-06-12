import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import { ShowHideContext } from '../../context/show-hide.context'

import './menu-buttons.styles.css'

function MenuButtons () {
    const {showhide, openclose} = useContext(ShowHideContext)
    const [podesi, setPodesi] = showhide
    const [prikazi, setPrikazi] = openclose

    function handleClick() {
        setPodesi('menu-hide')
        setPrikazi(false)
    }
  
    return(
        <div className={`menu-buttons ${podesi}`}>
            <div className='buttons-holder'>
                <Link className='link-btn' to='/' onClick={handleClick}>Home</Link>
                <Link className='link-btn' to='/about-us' onClick={handleClick}>About us</Link>
                <Link className='link-btn' to='/services' onClick={handleClick}>Services</Link>
                <Link className='link-btn' to='/join-us' onClick={handleClick}>Join us</Link>
                <Link className='link-btn' to='/contact' onClick={handleClick}>Contact</Link>
                {(() => {
                    if(!localStorage.getItem('userLog')) {
                        return <Link className='link-btn' to='/sign-in' onClick={handleClick}>Sign in</Link>
                    } else {
                        return <Link className='link-btn' to='/database' onClick={handleClick}>Database</Link>
                    }
                }) ()}
            </div>
        </div>
    )
}

export default MenuButtons;