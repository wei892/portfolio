import '../cssFiles/aboutme.css'
import portrait from '../imgs/protrait.png'
import { Route, useRoutes } from 'react-router-dom'
import { Link } from 'react-router-dom'


//import components
import BusinessDisplaay from '../compnents/bizDisplay'
import StudentDisplay from '../compnents/studentDisplay'


const AboutMe = () => {
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
                    <div className='button'>
                        Student
                    </div>

                    <div className='button'>
                        Entrepreneuer
                    </div>
                </div>
            </div>

            {/* {personaElements}             */}

        </div>
        
        </>
    )
}

export default AboutMe