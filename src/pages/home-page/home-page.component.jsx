import React, {useState, useEffect} from 'react'
import './home-page.styles.css'

import HomePageFirst from '../../components/home-page-components/home-page-1/home-page-1.component'
import HomePageSecond from '../../components/home-page-components/home-page-2/home-page-2.component'
import HomePageThird from '../../components/home-page-components/home-page-3/home-page-3.component'
import HomePageFourth from '../../components/home-page-components/home-page-4/home-page-4.component'
import HomePageFifth from '../../components/home-page-components/home-page-5/home-page-5.component'
import HomePageSixth from '../../components/home-page-components/home-page-6/home-page-6.component'
import HomePageSeventh from '../../components/home-page-components/home-page-7/home-page-7.component'
import HomePageEighth from '../../components/home-page-components/home-page-8/home-page-8.component'
import HomePageNinth from '../../components/home-page-components/home-page-9/home-page-9.component'

function HomePage() {

    const windowHeight = window.innerHeight

    const secondSection = windowHeight * 40 / 100
    const thirdSection = windowHeight + windowHeight * 40 / 100  
    const fourthSection = windowHeight + windowHeight

    const [section_2, setSection_2] = useState(false)
    const [section_3, setSection_3] = useState(false)
    const [section_4, setSection_4] = useState(false)

    useEffect( () => {
        window.addEventListener('scroll', event => {
          event.preventDefault()
    
          if(window.pageYOffset > secondSection && window.pageYOffset < secondSection + 100) {
            setSection_2(true)
            console.log('section_2')
          }  
          if(window.pageYOffset > thirdSection && window.pageYOffset < thirdSection + 100) {
            setSection_3(true)
            console.log('section_3')
          }
          if(window.pageYOffset > fourthSection && window.pageYOffset < fourthSection + 100) {
            setSection_4(true)
            console.log('section_4')
          }
        })
      
      })

    return(
        <div className='home-page'>
            <section className='section-1'>
                <HomePageFirst />
            </section>
            <section className='section-2'>
                <HomePageSecond section = {section_2} />
            </section>
            <section className='section-3'>
                <HomePageThird section = {section_3} />
            </section>
            <section className='section-4'>
                <HomePageFourth section = {section_4} />
            </section>
            <section className='section-5'>
                <HomePageFifth />
            </section>
            <section className='section-6'>
                <HomePageSixth />
            </section>
            <section className='section-7'>
                <HomePageSeventh />

            </section>
            <section className='section-8'>
                <HomePageEighth />

            </section>
            <section className='section-9'>
                <HomePageNinth />
            </section>
        </div>
    )
}

export default HomePage