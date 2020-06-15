import React from 'react' 
import Header from '../../Entities/Header/Header'
import AuthorsList from './AuthorsList.js'

class Authors extends React.Component {
    constructor() {
        super ()

        this.state = {
            users: []
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => {
                console.log(data);
                
                this.setState({ users: data})
            })
    }
    render() {
        return(
            <div>
                <Header />
                <div>
                    <h2>Authors ({this.state.users.length})</h2>
                    <AuthorsList users={this.state.users}/>
                </div>
            </div>
        )
    }
}
export default Authors