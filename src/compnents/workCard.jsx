
const WorkCard = (work) => {
    // console.log(props.compan)
    // console.log("hello")

    console.log(work)

    return (
        <>
            <div className="workCard">
                <div className="header">
                    <div> <h4>{work.position}</h4> </div>
                    <div> <h5>{work.duration}</h5> </div>
                </div>
                <div className="companyLine">
                    <div> <h5>{work.company}</h5></div>
                    <div> <h5>{work.location}</h5></div>
                </div>
                <div>
                    <h5> Description </h5>
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