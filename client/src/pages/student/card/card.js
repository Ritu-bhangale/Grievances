import React from 'react'
import './card.css'

const GrievanceCard = () => {
  return (
    <>
    <div className="grievanceCard">
        <div className="typeClass">
        <p className="type">Type : </p>
        <h1 className="typeTag">Sports</h1>
        </div>
        <p className="description">Description : </p>
        <p className="descrip">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate aliquam nihil tenetur? Maxime ad, provident omnis ipsam odio sint dolorem!
        </p>
        <div className="forwardedClass">
        <p className="forwarded">Forwarded to :  </p>
        <h1 className="forwardedTo"> Name of authority</h1>
        </div>
    </div>
    </>
  )
}

export default GrievanceCard