import React from 'react'
import AuthorItem from './AuthorItem'

class AuthorsList extends React.Component {
    constructor () {
        super()
    }

    render() {
        return (
            <div>
                {this.props.users.map(user => <AuthorItem user={user} numberOfPosts={2} />)}
            </div>
        )
    }
}
export default AuthorsList