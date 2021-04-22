import React from 'react'

import './home-page-3.styles.css'
import ImageThree from '../../../assets/images/main-page-three.jpg'

function HomePageThird({section}) {
    return(
        <div className='home-page-3'>
            {( () => {
                if(section === true) {
                    return (
                        <div className='div-holder-3'>
                            <div className="text-hold-3 anim-1">
                                <p className="text-3-1">
                                    Some text, <br/> here...
                                </p>
                                <p className="text-3-2">
                                    The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Ciceros De
                                    Finibus Bonorum et Malorum for use in a type specimen book.
                                </p>
                            </div>
                            <div className="image-hold-3 anim-1" style={{backgroundImage: `url(${ImageThree})`}} />
                        </div>
                    )
                }
            }) ()}
        </div>
    )
}

export default HomePageThird