import React from 'react' 
import Header from '../../Entities/Header/Header'
import { Button } from 'react-materialize'
import './Home.scss'

class Home extends React.Component {
    constructor() {
        super ()
    }

    render() {
        return(
            <div>
                <Header />
            <div className='Home'>
                <h2 className='Home__title'>New Post</h2>
                <label><h4>Title</h4></label>
                <input type='text' placeholder='PostTitle'></input>
                <label><h4>Content</h4></label>
                <textarea placeholder='Content of post'></textarea>
                <Button>Cancle</Button> <Button>Save</Button>
            </div>
            </div>
        )
    }
}
export default Home