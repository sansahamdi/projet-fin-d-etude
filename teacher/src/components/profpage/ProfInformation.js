import React from 'react'

 const ProfInformation = ({prof}) => {
    return (
        <>
        <div className="card mb-4 ">
      <div className="card-header header">
        <div>Professional Information</div>
      </div>
      <div className="card-body">
        <div className="flex">
          <p>Grade:</p>
          <span>{prof.grade?prof.grade.grade:""}</span>
        </div>
        <hr />
        <div className="flex">
          <p>Level:</p>
          <span>{prof.level?prof.level.level:""}</span>
        </div>
        <hr />
        <div className="flex">
          <p>Speciality:</p>
          <span>{prof.speciality? prof.speciality.speciality:""}</span>
        </div>
        <hr />
        <div className="flex">
          <p>Situation:</p>
          <span>{prof.situation? prof.situation.situation:""}</span>
        </div>
      </div>
    </div>
            
        </>
    )
}


export default ProfInformation
