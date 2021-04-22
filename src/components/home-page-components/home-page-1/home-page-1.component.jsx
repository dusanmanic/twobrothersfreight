import React from 'react';

import mainPage from '../../../assets/images/main-page.jpg'
import ApplyButton from '../../apply-button/component-button.component'
import './home-page-1.styles.css'

function HomePageFirst() {
    return(
        <div className='home-page-1' style={{backgroundImage: `url(${mainPage})`}}>
            <div className='page-wrapper'>
                <h4>TWO BROTHERS FREIGHT</h4>
                <h1>Our Success is Based On Your Success</h1>
                <ApplyButton name={'Apply NOW'} />
            </div>

        </div>
    )
}

export default HomePageFirst