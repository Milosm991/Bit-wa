import React from "react";
import "./GridUser.css";
import {hideEmail} from '../../functions.js'

const GridUser = ({ img, firstName, email, dateOfBirth, gender }) =>{ 
    const dob = new Date(dateOfBirth)
    const day = dob.getDate()
    const month = dob.getMonth()
    const year = dob.getFullYear()

    const female = (gender) => {        
        return gender === 'female' && 'female'
    }
    
return (
    <div className={"GridUser " + female(gender)}>
        <div className="GridUser__img">
            <img src={img} alt="avatar"></img>
        </div>
        <p>{firstName}</p>
        <p>{hideEmail(email)}</p>
        <p>{day}.{month + 1}.{year}</p>
    </div>
)
}


export { GridUser };