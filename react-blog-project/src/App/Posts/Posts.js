import React from 'react' 
import Header from '../../Entities/Header/Header'
import SinglePost from './SinglePost.js'
import './Posts.scss'

class Posts extends React.Component {
    constructor() {
        super ()

        this.state = {
            posts: []
        }
    }


    componentDidMount () {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => {
                this.setState({ posts: data.slice(0, 5)})
            })
    }

    fetchPost = (id) => {
        console.log(id);
        
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(resolve => resolve.json())
            .then(data => console.log(data))
    }
    render() {
        return(
            <div className='Posts'>
                <Header />
                <div className='Posts__body'>
                    <h2 className='Posts__body_title'>Posts</h2>
                    <SinglePost posts={this.state.posts} fetch={this.fetchPost}/>
                    
                </div>
            </div>
            
        )
    }
}
export default Posts