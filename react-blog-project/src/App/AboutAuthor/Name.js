import React from 'react'
import avatar from '../../avatar.png'
import './Name.scss'

class Name extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="Name">
                <div className="Name__image">
                    <img src={avatar}></img>
                </div>
                <div className="Name__info">
                    <h5>{this.props.name}</h5>
                    <p>username:{this.props.username}</p>
                    <p>email:{this.props.email}</p>
                    <p>phone:{this.props.phone}</p>
                </div>
            </div>

        )
    }
}

export default Name