import React, {Fragment, useState, useEffect, useReducer} from 'react'
import {Switch, Route} from 'react-router-dom'

import { useLocation } from 'react-router-dom'

import Header from './components/header/header.component'
import MenuButtons from './components/menu-buttons/menu-buttons.component'
import Footer from './components/footer/footer.component'

import HomePage from './pages/home-page/home-page.component'
import Contact from './pages/contact-page/contact.component'
import AboutUs from './pages/about-us-page/about-us.component'
import JoinUs from './pages/join-us-page/join-us.component'
import Services from './pages/services-page/services.component'
import SignIn from './pages/sign-in-page/sign-in.component'
import GreetingPage from './pages/greeting-page/greeting.component'
import DatabasePage from './pages/database-page/database.component'

import Verification from './pages/verification/verification.component'

import {firestore} from './firebase/firebase.utils'

import MessangerChat from './components/messanger/messanger.component'

import {ShowHideContext} from './context/show-hide.context'

import {sectionReducer} from './reducer/sectionReducer'

import './App.css';

function App() {

  const location = useLocation()
  console.log(location.pathname)
  
  // const windowHeight = window.innerHeight

  // const secondSection = windowHeight * 70 / 100
  // const thirdSection = windowHeight + windowHeight * 40 / 100  

  // const initialState = {section_2: false, section_3: false}
  // const [state, dispatch] = useReducer(sectionReducer, initialState)

  const [showhide, setShowhide] = useState('menu-hide')
  const [isOpen, setOpen] = useState(false)
  const [applicant, setApplicant] = useState('')
  const [statusError, setStatusError] = useState('')

  let contextObjects = {
    showhide: [showhide, setShowhide],
    openclose: [isOpen, setOpen],
    applicant: [applicant, setApplicant],
    emailStatus: [statusError, setStatusError]
  }

  // console.log(applicant)

  // useEffect( () => {

  //   window.addEventListener('scroll', event => {
  //     event.preventDefault()

  //     // console.log(windowHeight * 70 / 100)
  //     // console.log(secondSection)
  //     // console.log(windowHeight)
  //     // console.log(window.pageYOffset)

  //     if(window.pageYOffset > secondSection && window.pageYOffset < secondSection + 30) {
  //       dispatch({ type: "section_2"})
  //       // console.log('section_2')
  //     }  
  //     if(window.pageYOffset > thirdSection && window.pageYOffset < thirdSection + 30) {
  //       dispatch({ type: "section_3"})
  //       // console.log('section_3')
  //     }
  //   })
  
  // }, [])

  return (
    <div className="App">
      <ShowHideContext.Provider value={contextObjects}>
        <Switch>
          <Route exact path='/welcome-to-our-company' component={GreetingPage} />
          <Route exact path='/database' component={DatabasePage} />
          <Route exact path='/join-us' component={JoinUs}/>
          <Route exact path={`/verif${location.pathname.substring(6)}`} render={() => <Verification someUrl={location.pathname} />} />
          <Fragment>
            {/* <MessangerChat /> */}
            <MenuButtons />
            <Header />  
            <Route exact path='/' component={HomePage}/>
            <Route exact path='/about-us' component={AboutUs}/>
            <Route exact path='/services' component={Services}/>
            <Route exact path='/contact' component={Contact}/>
            <Route exact path='/sign-in' component={SignIn}/>
            <Footer />
          </Fragment>
        </Switch>

      </ShowHideContext.Provider> 
    </div>
  );
}


export default App;
