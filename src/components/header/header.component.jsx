import React, {useContext} from 'react'
import {Link} from 'react-router-dom'
 
import ComponentButton from '../apply-button/component-button.component'
import { Fade as Hamburger } from 'hamburger-react'
import { ShowHideContext } from '../../context/show-hide.context';

import logo from '../../assets/images/logo.png'

import './header.styles.css'

function Header() {
    const {setShowhide} = useContext(ShowHideContext)
    
    return(
        <div className='header'>
            <Link className='logo' style={{backgroundImage: `url(${logo})`}} to='/' />
            <div className='buttons'>
                <div className='call-button'>
                    <ComponentButton name={'Call us'} />
                </div>
                <div className='apply-button'>
                    <ComponentButton name={'Apply NOW'} />
                </div>
            </div>
            <div className='menu-button'>
                <Hamburger size={40} color="#ffffff"  onToggle={toggled => toggled ? setShowhide('menu-show') : setShowhide('menu-hide')}/>
            </div>
        </div>
    )

}

export default Header;