import '../cssFiles/aboutme.css'
import portrait from '../imgs/protrait.png'


//import components
import Contacts from "./Contacts"


const AboutMe = () => {
    return (
        <>
        <div className='aboutMeBanner'>
            <br/>
            <div className='imageCont'> 
                <img className='aboutMeImage' src={portrait} alt='aboutMeImage'></img>
            </div>
            

        </div>
        
        </>
    )
}

export default AboutMe