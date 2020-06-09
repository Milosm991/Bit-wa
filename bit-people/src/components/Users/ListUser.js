import React from "react";
import './ListUser.css'
import {MdEmail} from 'react-icons/md'
import { FaBirthdayCake } from "react-icons/fa"
import PropTypes from 'prop-types'
import {hideEmail} from '../../functions.js'

const ListUser = ({img, lastName, firstName, dateOfBirth, email, gender}) => {
    const dob = new Date(dateOfBirth)
    const day = dob.getDate()
    const month = dob.getMonth()
    const year = dob.getFullYear()

    const female = (gender) => {        
        return gender === 'female' && 'female'
    }
    
    
    return (
        <div className={'ListUser ' + female(gender)}>
            <div className="ListUser__img">
                <img src={img} alt="avatar" ></img>
            </div>
            <div className="ListUser__info">
                <p>{firstName} {lastName}</p>
                <p><MdEmail /> Email: {hideEmail(email)}</p>
                <p><FaBirthdayCake />{day}.{month + 1}.{year}</p>
            </div>
        </div>
    )
}

export { ListUser };

ListUser.propTypes = {
    img: PropTypes.string,
    lastName: PropTypes.string,
    firstName: PropTypes.string,
    email: PropTypes.string,
    dateOfBirth: PropTypes.string,
}