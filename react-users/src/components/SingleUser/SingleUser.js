import React from 'react'
import PropTypes from "prop-types"
import "./SingleUser.css"

const SingleUser = (props) => {
    const dob = new Date(props.dateOfBirth)
    const year = dob.getFullYear()
    const month = dob.getMonth()
    const day = dob.getDate()
    console.log(dob);

    return (
        <div className="SingleUser">
            <div className="SingleUser__img">
                <img className="SingleUser__img_avatar" src={props.src}></img>
            </div>
            <div className="SingleUser__info">
                <p>{props.firstName} {props.lastName}</p>
                <p>Email: {props.email}</p>
                <p>Date of birth: {day}.{month + 1}.{year}</p>
            </div>
        </div>
    )
}

SingleUser.propTypes = {
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    email: PropTypes.string,
    dateOfBirth: PropTypes.string
}


export default SingleUser