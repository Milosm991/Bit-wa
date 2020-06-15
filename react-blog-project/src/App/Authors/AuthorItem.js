import React from 'react'

class AuthorItem extends React.Component {
    constructor(props) {
        super(props) 
        this.state ={ 
            user: this.props.user,
            numberOfPosts: this.props.numberOfPosts
        }
    }

    render () {
        return(
            <div>
                <p>{this.state.user.name}</p>
            </div>
        )
    }
}
export default AuthorItem