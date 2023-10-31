import { useState } from 'react'
import { Router} from 'react-router-dom'
import { useRoutes } from 'react-router-dom'

import './cssFiles/app.css'
import './cssFiles/NavBar.css'

// import components
// import MyNavBar from './pages/NavBar'
import HomepageBanner from './pages/HomescreenBanner'
import AboutMe from './pages/AboutMe'
import Exp from './pages/Experiences'
import Projects from './pages/Projects'
import Contacts from './pages/Contacts'
import Footer from './pages/Footer'


function App() {

  let navElement = useRoutes([
    {path: '/', element: <HomepageBanner/>},
  ])

  return (
    <div>
      {/* <MyNavBar/> */}
      <header>
        <div className='navBar navigation'>
          <div className='leftCont'>
            <h1> Mimi</h1>
          </div>
          <div className='rightCont'>
            <div className='navButton'> 
              <h5> Home </h5> 
            </div>

            <div className='navButton'> 
              <h5> Experiences </h5> 
            </div>

            <div className='navButton'> 
              <h5> Projects </h5> 
            </div>

            <div className='navButton'> 
              <h5> Resume </h5> 
            </div> 
          </div>
        </div>
      </header>

      {navElement}
      

      <Footer/> 

    </div>
  )
}

export default App
