import React from 'react'
import data from '../../Data/RandomUsers.json'
import GridUser from '../GridUser/GridUser.js'
import './GridUsers.css'

const GridUsers = () => {
    console.log(data)
    return (
        <div className="GridUsers">
            {data.results.map((user, i) => (

                <GridUser
                    key={i}
                    src={user.picture.large}
                    firstName={user.name.first}
                    lastName={user.name.last}
                    email={user.email}
                    gender={user.gender}
                    dateOfBirth={user.dob.date}
                />))}
        </div>
    )
}
export default GridUsers