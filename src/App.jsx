import { useState } from 'react'
import { Router, useRouteError } from 'react-router-dom'

import './cssFiles/app.css'

// import components
import MyNavBar from './pages/NavBar'
import HomepageBanner from './pages/HomescreenBanner'
import AboutMe from './pages/AboutMe'
import Exp from './pages/Experiences'
import Projects from './pages/Projects'
import Contacts from './pages/Contacts'
import Footer from './pages/Footer'


function App() {
  return (
    <div>
      <MyNavBar/>
      <br></br>
      <HomepageBanner className="banner" id= 'home'/>

      <AboutMe> </AboutMe>
      <Exp />
      {/* <Projects></Projects> */}
      {/* <Contacts></Contacts> */}

      <Footer/> 

    </div>
  )
}

export default App
