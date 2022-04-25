import React from 'react'
import './StudentNav.css'
import { Link } from 'react-router-dom'
import Button from '../../../components/button/button'

const StudentNav = () => {
  return (
    <>
    <div className="navContainer">
        <h2><span>Name of Student</span></h2>
        <h5>Student</h5>
        <div className="navContains">
            <div className="navTag upcoming">
                <Link to={"./upcoming.js"}>
                    <p className="solvedGrievance opt">Solved Grievances</p>
                </Link>
            </div>
            <div className="navTag past">
                <Link to={"./past.js"}>
                    <p className="unsolvedGrievance opt">Unsolved Grievances</p>
                </Link>
            </div>
        </div>
        <div className="bookAppoint">
            <Link to={"/form"}>
            <Button buttonStyle="btn-normal">Complaint</Button>
            </Link>
        </div>
    </div>
    </>
  )
}

export default StudentNav