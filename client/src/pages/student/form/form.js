import React from 'react'

const GrievanceForm = () => {
  return (
    <>
    <div className="grievanceForm">
        <h1>Enter the details below.</h1>
        <form>
            <p className="nameLabel">Enter your name :</p>
            <input type="text" name="name" id="name" />
            <p className="rollLabel">Enter your Roll number : </p>
            <input type="text" name="roll" id="roll" />
            <p className="typeLabel">Select the type of grievance : </p>
            <input type="checkbox" name="some" id="some"/>
            <label htmlFor="some">Some reason1</label>
            <input type="checkbox" name="some2" id="some"/>
            <label htmlFor="some2">Some reason2</label>
            <input type="checkbox" name="some3" id="some"/>
            <label htmlFor="some3">Some reason3</label>
            <input type="checkbox" name="some4" id="some"/>
            <label htmlFor="some4">Some reason4</label>
            <div className="submitButton">
              <input type="submit" value="Submit" />
            </div>
        </form>
    </div>
    </>
  )
}

export default GrievanceForm