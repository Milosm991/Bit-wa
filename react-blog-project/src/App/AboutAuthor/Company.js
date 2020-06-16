import React from 'react'
import './Company.scss'

class Company extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className='Company'>
                <h5>Company</h5>
                <p>name: {this.props.nameCompany}</p>
                <p>slogan: {this.props.slogan}</p>
            </div>

        )
    }
}

export default Company