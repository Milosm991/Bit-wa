import React from 'react'
import Header from '../../Entities/Header/Header'
import Post from './Post.js'
import { fetchPosts } from '../../fetch.js'
import './Posts.scss'

class Posts extends React.Component {
    constructor() {
        super()

        this.state = {
            posts: []
        }
    }


    componentDidMount() {
        fetchPosts('https://jsonplaceholder.typicode.com/posts')
            .then(data => {
                this.setState({ posts: data.slice(0, 5) })
            })
    }

    render() {
        return (
            <div className='Posts'>
                <Header />
                <div className='Posts__body'>
                    <h2 className='Posts__body_title'>Posts</h2>
                    <Post posts={this.state.posts}/>

                </div>
            </div>

        )
    }
}
export default Posts