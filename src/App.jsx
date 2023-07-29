import { useState } from 'react'
import './App.css'

// importing bootstrap
import { Button, Navbar } from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css"


// import components
import MyNavBar from './component/NavBar'
import HomepageBanner from './component/HomescreenBanner'
import AboutMe from './component/AboutMe'
import Exp from './component/Experiences'
import Projects from './component/Projects'
import Contacts from './component/Contacts'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <MyNavBar></MyNavBar>

      <br>
      </br>
      <HomepageBanner className="banner"></HomepageBanner>\
      <AboutMe></AboutMe>
      <Exp></Exp>
      <Projects></Projects>

      <Contacts></Contacts>

    </div>
  )
}

export default App
