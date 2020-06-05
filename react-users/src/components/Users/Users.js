import React from 'react'
import data from '../../Data/RandomUsers.json'
import SingleUser from '../SingleUser/SingleUser.js'

const Users = () => {

    return (
            data.results.map((user, i) => (
                <SingleUser
                    key={i}
                    src={user.picture.thumbnail}
                    firstName={user.name.first}
                    lastName={user.name.last}
                    email={user.email}
                    dateOfBirth={user.dob.date}
                />))
    )

}

export default Users