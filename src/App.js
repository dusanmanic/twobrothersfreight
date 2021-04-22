import React, {useState, useEffect, useReducer} from 'react'
import {Switch, Route} from 'react-router-dom'

import Header from './components/header/header.component'
import MenuButtons from './components/menu-buttons/menu-buttons.component'

import HomePage from './pages/home-page/home-page.component'
import AboutUs from './pages/about-us-page/about-us.component'
import Contact from './pages/contact-page/contact.component'
import JoinUs from './pages/join-us-page/join-us.component'
import Services from './pages/services-page/services.component'
import SignIn from './pages/sign-in-page/sign-in.component'

import {ShowHideContext} from './context/show-hide.context'

import {sectionReducer} from './reducer/sectionReducer'

import './App.css';

function App() {

  // const windowHeight = window.innerHeight

  // const secondSection = windowHeight * 70 / 100
  // const thirdSection = windowHeight + windowHeight * 40 / 100  

  // const initialState = {section_2: false, section_3: false}
  // const [state, dispatch] = useReducer(sectionReducer, initialState)

  const [showhide, setShowhide] = useState('menu-hide')

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
      <ShowHideContext.Provider value={{showhide, setShowhide}}>
        <MenuButtons />
        <Header />
      </ShowHideContext.Provider>
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route exact path='/about-us' component={AboutUs}/>
        <Route exact path='/services' component={Services}/>
        <Route exact path='/join-us' component={JoinUs}/>
        <Route exact path='/contact' component={Contact}/>
        <Route exact path='/sign-in' component={SignIn}/>
      </Switch>
    </div>
  );
}

export default App;
