import '../cssFiles/aboutme.css'
import portrait from '../imgs/protrait.png'
import { useRoutes } from 'react-router-dom'
import { Link } from 'react-router-dom'


//import components
import BusinessDisplaay from '../compnents/bizDisplay'
import StudentDisplay from '../compnents/studentDisplay'


const AboutMe = () => {
    let personaElements = useRoutes([
        {path: '/', element: <StudentDisplay/>},
        {path: 'business', element: <BusinessDisplaay/>}
    ])

    return (
        <>
        <div className='aboutMeBanner'>
            <br/>
            <div className='imageCont'> 
                <img className='aboutMeImage' src={portrait} alt='An image of me'></img>
            </div>

            <br></br>

            <div className='details'>
                I am a:
                <div className='buttonCont'>
                    <div className='buttons'>
                        <Link to='/aboutMe'>
                            Student
                        </Link>
                    </div>

                    <div className='buttons'>
                        <Link to='business'>
                            Small Business Owner
                        </Link>
                    </div>
                </div>
            </div>

            {personaElements}            

        </div>
        
        </>
    )
}

export default AboutMe