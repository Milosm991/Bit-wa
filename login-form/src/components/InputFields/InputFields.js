import React from 'react'
import './InputFields.scss'

class InputFields extends React.Component {
    constructor(props){
        super(props)
    }
    username = (e) => {
        const value = e.target.value
        this.props.user(value)
    }

    password = (e) => {
        const val = e.target.value
        this.props.pass(val)
    }

    render(){
        return(
            <div className='InputFields'>

                <input 
                    className = 'InputFields__user'
                    onChange={this.username} 
                    value={this.props.valueUsername} 
                    type='text' 
                    placeholder='Username'></input>
                <br />
                <input 
                    className = 'InputFields__pass'
                    onChange={this.password} 
                    value={this.props.valuePass} 
                    type='password' 
                    placeholder='Password'></input>
                <br />
                <button className = 'InputFields__btnL' onClick={this.props.alert}>Login</button>
                <br />
                <button className = 'InputFields__btnR' onClick={this.props.reset}>Reset</button>
            </div>
            )
        }
    }

export default InputFields