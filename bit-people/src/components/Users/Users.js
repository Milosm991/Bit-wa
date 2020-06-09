import React from "react";
import "./Users.css";
import { ListUser } from "./ListUser.js"
import { GridUser } from "./GridUser.js";
import Counter from '../Counter/Counter.js'


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
            .then(data => {
                localStorage.setItem('users', JSON.stringify(data.results))
                this.setState({ allUsers: data.results})
            })
    }

    render() {
        return (
            <div>
                <Counter users={this.state.allUsers}/>
                <div className='Users'>
                
                    {this.state.allUsers.map((user, i) => {
                        if (this.props.isListView) {
                            return <ListUser
                                key={i}
                                img={user.picture.thumbnail}
                                firstName={user.name.first}
                                lastName={user.name.last}
                                email={user.email}
                                dateOfBirth={user.dob.date}
                                gender={user.gender} />
                        } else {
                            return <GridUser
                                key={i}
                                img={user.picture.large}
                                firstName={user.name.first}
                                lastName={user.name.last}
                                email={user.email}
                                dateOfBirth={user.dob.date}
                                gender={user.gender} />
                        }
                    })
                    }
                </div>
            </div>

        )
    }

}


export default Users