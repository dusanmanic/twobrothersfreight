import React, {useContext} from 'react'
import {Link} from 'react-router-dom'
 
import ComponentButton from '../buttons/apply-button/component-button.component'
import LinkButton from '../buttons/link-button/link-button.component'
import { Fade as Hamburger } from 'hamburger-react'
import { ShowHideContext } from '../../context/show-hide.context';

import logo from '../../assets/images/logo.png'

import './header.styles.css'

function Header() {
    const {showhide, openclose} = useContext(ShowHideContext)
    const [podesi, setPodesi] = showhide
    const [prikazi, setPrikazi] = openclose

    // console.log(prikazi)

    return(
        <div className='header'>
            <Link className='logo' style={{backgroundImage: `url(${logo})`}} to='/' />
            <div className='header-buttons-wrapper'>
                    <ComponentButton name={'Call us'} />
                    <LinkButton to={'join-us'} name={'Apply NOW'} />
            </div>
            <div className='menu-button'>
                <Hamburger size={40} color="#ffffff" toggled={prikazi} toggle={setPrikazi} onToggle={toggled => toggled ? setPodesi('menu-show') : setPodesi('menu-hide')} /> 
            </div>
        </div>
    )

}

export default Header;