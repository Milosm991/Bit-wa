import React from 'react' 
import Header from '../../Entities/Header/Header'

class Posts extends React.Component {
    constructor() {
        super ()
    }

    render() {
        return(
            <div>
                <Header />
                <h2>Posts</h2>
            </div>
            
        )
    }
}
export default Posts