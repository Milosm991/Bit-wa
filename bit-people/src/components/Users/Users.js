import React from "react";
import "./Users.css";
import { ListUser } from "./ListUser.js"
import { GridUser } from "./GridUser.js";


class Users extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            allUsers: []
        };
    }

    componentDidMount() {

        fetch("https://randomuser.me/api/?results=15")
            .then(resolve => resolve.json())
            .then(data => this.setState({
                allUsers: data.results
            }))
    }


    render() {
        return (
            <div className='Users'>
                {this.state.allUsers.map((user, i) => {
                    if (this.props.isListView) {
                        return <ListUser
                            key={i}
                            img={user.picture.thumbnail}
                            firstName={user.name.first}
                            lastName={user.name.last}
                            email={user.email}
                            dateOfBirth={user.dob.date} />
                    } else {
                        return <GridUser
                            key={i}
                            img={user.picture.large}
                            firstName={user.name.first}
                            lastName={user.name.last}
                            email={user.email}
                            dateOfBirth={user.dob.date} />
                    }
                })
                }
            </div>

        )
    }

}


export default Users