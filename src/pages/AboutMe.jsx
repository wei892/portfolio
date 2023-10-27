import '../cssFiles/aboutme.css'
import portrait from '../imgs/protrait.png'
import { Route, useRouteError } from 'react-router-dom'


//import components
import BusinessDisplaay from '../compnents/bizDisplay'
import StudentDisplay from '../compnents/studentDisplay'

// let persona = useRoute({

// })


const AboutMe = () => {
    return (
        <>
        <div className='aboutMeBanner'>
            <br/>
            {/* <div className='imageCont'> 
                <img className='aboutMeImage' src={portrait} alt='aboutMeImage'></img>
            </div> */}

            <div className='details'>
                Chech out what I'm doing in each role
                <div className='buttonCont'>
                    <div className='button'>
                        Student
                    </div>

                    <div className='button'>
                        Entrepreneuer
                    </div>
                    
                </div>
            </div>

            <StudentDisplay />
            <BusinessDisplaay />
            

        </div>
        
        </>
    )
}

export default AboutMe