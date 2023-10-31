// stylying for the homepage banner
import '../cssFiles/homesceen.css'

// importing packages
import { Link } from 'react-router-dom'

const HomepageBanner = () => {

    return (
        <>
            <div className="homepageBanner">
                <div className="bioCont">
                    <h2>
                        Hi! I'm Mimi Li
                    </h2>
                    <p>
                        <b>Computer Science </b> student at <b>CUNY - Hunter College</b> with a minor in Mathematics
                    </p>
                    <div className="linkContainer">
                        <div> 
                            <Link to='../aboutMe'> About Me </Link>
                        </div>
                        <div> <a target='_blank'href='https://www.linkedin.com/in/mimi-li03/'> Linked In </a> </div>
                        <div> <a target='_blank' href='https://github.com/wei892'> Github </a> </div>
                    </div>
                </div>
                <div className="bioCont heartCont">  
                    <div className="heart">
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomepageBanner