import '../cssFiles/experiences.css'

import WorkExperiences from '../data/workExp.jsx'
import WorkCard from '../compnents/workCard';

const Exp = () =>{
    return (
        <>
            <div className='expCont'>
            {
                WorkExperiences && WorkExperiences.length > 0 ? 
                    WorkExperiences.map((work, index) => 
                        <WorkCard 
                            company = {work.company}
                            position = {work.position}
                            location = {work.location}
                            duration = {work.duration}
                            description = {work.description} />
                    )
                :
                <div> No work experiences Available </div>
            }
            </div>
        </>
      );

}

export default Exp 