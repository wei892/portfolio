const ResumePage = () =>{

    return (
        <div>
            <div> Resume </div>

            <center>
                {/* <object data="../imgs/resume.pdf" width="90%"></object> */}
                {/* <iframe src="../imgs/resume.pdf" width="90%" heigh t="500px"></iframe> */}
                <embed src="src/imgs/resume.pdf" type="application/pdf" width="90%" height="600px"></embed>
            </center>
        </div>
    )


}

export default ResumePage