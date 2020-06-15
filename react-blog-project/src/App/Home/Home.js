import React from 'react' 
import Header from '../../Entities/Header/Header'

class Home extends React.Component {
    constructor() {
        super ()
    }

    render() {
        return(
            <div>
                <Header />
                <h2>Home</h2>
            </div>
            
        )
    }
}
export default Home