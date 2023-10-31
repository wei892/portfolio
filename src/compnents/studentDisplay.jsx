// import css
import './studentDisplay.css'


const StudentDisplay = () => {
    return (
        <>
            <div className='displayCont'>
                {/* <div className="header"> Always Learning </div> */}

                <div className='title'> 
                    What I Am Learning Now:
                    <div>
                        here's a div that will contain my current project
                    </div>
                </div>
                What I've Learned 
                <div className='buttonContainer'>
                    <div className='button'>
                        Blog Site
                    </div>
                    <div className='button'>
                        My Projects
                    </div>
                </div>
            </div>

        </>
    )
}

export default StudentDisplay