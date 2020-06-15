import React from 'react' 
import Header from '../../Entities/Header/Header'

class Authors extends React.Component {
    constructor() {
        super ()
    }

    render() {
        return(
            <div>
                <Header />
                <h2>Authors</h2>
            </div>
            
        )
    }
}
export default Authors