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
                    <p><b>username:</b> {this.props.username}</p>
                    <p><b>email:</b> {this.props.email}</p>
                    <p><b>phone:</b> {this.props.phone}</p>
                </div>
            </div>

        )
    }
}

export default Name