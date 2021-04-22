import React from 'react'

import MainPageTwo from '../../../assets/images/main-page-two.png'
import Card from '../../card/card.component'

import CardOne from '../../../assets/icons/card-icon-1.png'
import CardTwo from '../../../assets/icons/card-icon-2.png'
import CardThree from '../../../assets/icons/card-icon-3.png'

import './home-page-2.styles.css'

function HomePageSecond({section}) {

    const textOne = 'Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.'
    const textTwo = 'The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Ciceros De Finibus Bonorum et Malorum for use in a type specimen book.'
    const textThree = 'The purpose of lorem ipsum is to create a natural looking block of text (sentence, paragraph, page, etc.) that doesnt distract from the layout. '

    return(
        <div className='home-page-2' style={{backgroundImage: `url(${MainPageTwo})`}}>
            {( () => {
                if(section === true) {
                    return(
                    <div className="card-holder">
                        <Card image={CardOne} text={textOne} />
                        <Card image={CardTwo} text={textTwo} />
                        <Card image={CardThree} text={textThree} />
                    </div>
                    )
                }
            }) ()}
        </div>
    )
}

export default HomePageSecond