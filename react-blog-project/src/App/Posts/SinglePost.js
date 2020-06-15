import React from 'react'
import './SinglePost.scss'
import { Link } from 'react-router-dom'
import AboutPost from '../AboutPost/AboutPost'

const SinglePost = ({ posts, fetch }) => {
    return (
        posts.map(post => <div className='SinglePost'  onClick={() => fetch(post.id)}>
            <Link to='/AboutPost'><h4 className='SinglePost__title' >{post.title}</h4></Link>
            <p className='SinglePost__body'>{post.body}</p>
           
        </div>)
    )
}
export default SinglePost

// {this.state.posts.map((post, i) => 
//     <SinglePost 
//     title={post.title} 
//     body={post.body} 
//     id={post.id}
//     fetch={this.fetchPost}/>)}