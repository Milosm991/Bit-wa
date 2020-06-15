import React from 'react' 
import Header from '../../Entities/Header/Header'

class About extends React.Component {
    constructor() {
        super ()
    }

    render() {
        return(
            <div>
                <Header />
                <div>
                    <h2>About</h2>
                </div>
            </div>
        )
    }
}
export default About