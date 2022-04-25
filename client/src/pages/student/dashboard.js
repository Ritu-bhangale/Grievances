import React from 'react'
import StudentNav from './nav/StudentNav'
import GrievanceCard from './card/card'
import './dashboard.css'

const Dashboard = () => {
  return (
    <>
   <div className="dashboardStudent">
   <div className="left">
    <StudentNav/>
    </div>
    <div className="right">
    <GrievanceCard/>
    </div>
   </div>
    </>
  )
}

export default Dashboard