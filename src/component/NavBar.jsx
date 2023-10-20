
// components
import './cssFiles/NavBar.css'

import { useEffect, useState } from 'react';

const MyNavBar = () => {
    const [show, setShowStatus] = useState(false);

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
                    <h5> Home </h5> 
                </div>

                <div className='navButton'> 
                    <h5> Home </h5> 
                </div>

                <div className='navButton'> 
                    <h5> Home </h5> 
                </div> 
            </div>
        </div>
    )
    
}

export default MyNavBar