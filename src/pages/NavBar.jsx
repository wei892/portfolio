// components
import '../cssFiles/NavBar.css'

const MyNavBar = () => {
    return(
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
    )
    
}

export default MyNavBar