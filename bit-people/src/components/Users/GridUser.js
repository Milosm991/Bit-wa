import React from "react";
import "./GridUser.css";
import {hideEmail} from '../../functions.js'

const GridUser = ({ img, firstName, email, dateOfBirth }) =>{ 
    const dob = new Date(dateOfBirth)
    const day = dob.getDate()
    const month = dob.getMonth()
    const year = dob.getFullYear()

return (
    <div className="GridUser">
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