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
                <div>
                    <h2>Posts</h2>
                </div>
            </div>
            
        )
    }
}
export default Posts