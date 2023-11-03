import { useRoutes } from 'react-router-dom'
import { Link } from 'react-router-dom'

import './cssFiles/app.css'
import './cssFiles/NavBar.css'

// import components
import HomepageBanner from './pages/HomescreenBanner'
import AboutMe from './pages/AboutMe'
import Exp from './pages/Experiences'
import Projects from './pages/Projects'
import Footer from './pages/Footer'


function App() {

  let navElement = useRoutes([
    {path: '/', element: <HomepageBanner/>},
    {path: 'aboutMe/*', element: <AboutMe/>},
    {path:'exp', element: <Exp/>},
    {path:'projects', element: <Projects/>},
  ])

  return (
    <div className='pageCont'>
      <div className='pageBody'>
        <header>
          <div className='navBar navigation'>
            <div className='leftCont'>
              <h1> Mimi</h1>
            </div> 
            
            <div className='rightCont'>
              <div className='navButton'> 
                <Link to='/'> 
                  <h5> Home </h5>
                </Link>
              </div>

              <div className='navButton'>
                <Link to='/aboutMe'>
                  <h5> About Me </h5> 
                </Link>

            </div>

            <div className='navButton'> 
              <Link to='/exp'>
                <h5> Experiences </h5> 
              </Link>
            </div>

            <div className='navButton'> 
              <Link to='/projects'>
                <h5> Projects </h5> 
              </Link>
            </div>

            <div className='navButton'> 
              <h5> Resume </h5> 
            </div> 
          </div>
        </div>
      </header>
      {navElement}
      </div>

      <div className='footer'>
        <Footer/> 
      </div>
    </div>
  )
}

export default App
