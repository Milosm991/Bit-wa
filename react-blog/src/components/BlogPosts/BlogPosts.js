import React from 'react'
import './BlogPosts.css'
import Post from './Post'

const BlogPosts = () => {
    const data = [{ title: 'Youtube', description: 'Description about post', url: 'http://www.youtube.com' },
    { title: 'Google', description: 'Description about post', url: 'http://www.google.com' },
    { title: 'Facebook', description: 'Description about post', url: 'http://www.facebook.com' },
    { title: 'Instagram', description: 'Description about post', url: 'http://www.instagram.com' },
    { title: 'Wikipedia', description: 'Description about post', url: 'http://www.wikipedia.com' },
    { title: 'Twitter', description: 'Description about post', url: 'http://www.twitter.com' }]

    return (
        data.map((post, i) =>
            <Post key={i} title={post.title} description={post.description} url={post.url} />
        )
    )
}

export default BlogPosts