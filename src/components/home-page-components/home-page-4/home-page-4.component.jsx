import React from 'react'

import './home-page-4.styles.css'

import LinkButton from '../../buttons/link-button/link-button.component'
import ImageFourth from '../../../assets/images/main-page-fourth.jpg'

function HomePageFourth({section}) {
    
    return(
        <div className="div-holder-4">
            {( () => {
                if(section === true) {
                    return(
                        <div className='home-page-4'>
                            <div className="image-hold-4  anim-2" style={{backgroundImage: `url(${ImageFourth})`}} />
                            <div className="text-hold-4  anim-3">
                                <p className="text-4-1">
                                    Some text, <br/> here...
                                </p>
                                <p className="text-4-2">
                                    The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Ciceros De
                                    Finibus Bonorum et Malorum for use in a type specimen book.
                                </p>
                                <LinkButton to={'join-us'} name={'Apply NOW'} />
                            </div>
                        </div>
                    )
                }
            }) ()}
        </div>
    )
}

export default HomePageFourth