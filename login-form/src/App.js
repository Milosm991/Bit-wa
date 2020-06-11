import React from 'react';
import InputFields from './components/InputFields/InputFields';
import './App.scss'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      username: '',
      password: ''
    }
  }


  usernameField = (value) => {
    this.setState({ username: value})
  }

  passwordField = (val) => {
    this.setState({ password: val})
  }

  alertFunc = () => {
    alert(`Username: ${this.state.username} Password: ${this.state.password}`)
  }

  reset = () => {
    this.setState({
      username: '',
      password: ''
    })
  }
  render(){
    return (
      <div className='App'>
        <h3>Login</h3>
        <InputFields  user={this.usernameField} 
                      pass={this.passwordField} 
                      alert={this.alertFunc}
                      reset={this.reset}
                      valueUsername={this.state.username}
                      valuePass={this.state.password}/>
      </div>
    );
  }
  
  }

export default App;
