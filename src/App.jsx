import { useState } from 'react'
import './App.css'

// importing bootstrap
import { Button, Navbar } from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css"


// import components
import MyNavBar from './component/NavBar'
import HomepageBanner from './component/HomescreenBanner'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <MyNavBar></MyNavBar>

      <br>
      </br>
      <HomepageBanner className="banner"></HomepageBanner>

    </div>
  )
}

export default App
