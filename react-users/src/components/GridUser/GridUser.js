import React from 'react'
import "./GridUser.css"
import PropTypes from "prop-types"

const GridUser = (props) => {
    const dob = new Date(props.dateOfBirth)
    const year = dob.getFullYear()
    const month = dob.getMonth()
    const day = dob.getDate()

    return (
        <div className="GridUser__card">
            <div className="GridUser__card_img">
                <img src={props.src}></img>

            </div>
            <div className="GridUser__card_info">
                <p>{props.gender}</p>
                <p className="GridUser__card_info--name">{props.firstName} 
                {props.lastName}</p>
                <p>{props.email}</p>
                <p>{day}.{month}.{year}</p>
            </div>

        </div>

    )

}

GridUser.propTypes = {
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    email: PropTypes.string,
    dateOfBirth: PropTypes.string

}
export default GridUser
