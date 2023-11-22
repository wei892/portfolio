// import css
import './studentDisplay.css'


const StudentDisplay = () => {
    return (
        <>
            <div className='displayCont'>
                {/* <div className="header"> Always Learning </div> */}

                <div className='title'> 
                    <b> What I Am Working On Now: </b>
                    <div className='itemList'>
                        <ul>
                            <li>
                                Interning with the MTA as a QA analyst intern
                            </li>
                            <li>
                                Learning Python
                                <ul>
                                    <li>
                                        Building a tik-tac-toe game
                                    </li>
                                </ul>
                            </li>
                            <li>
                                Learning to use Postges and SQL queries
                            </li>
                        </ul>
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