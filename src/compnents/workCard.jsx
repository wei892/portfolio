import './workCard.css'

const WorkCard = (work) => {
    // console.log(props.compan)
    // console.log("hello")

    console.log(work)

    return (
        <>
            <div className="workCard">
                <div className="header">
                    <div className='position'> {work.position}</div>
                    <div className='duration'> {work.duration}</div>
                </div>
                <div className="companyLine">
                    <div className='company'> {work.company}</div>
                    <div className='location'> {work.location}</div>
                </div>
                <div className='desc'>
                    <ul>
                        {
                            work.description.map((desc, ind) =>
                                <li> {desc} </li>
                            )
                        }
                    </ul>
                </div>
            </div>
        </>
    )
}

export default WorkCard