import React from 'react'
import './BlogPosts.css'
import Post from './Post'
import yt from '../img/youtube.png'
import google from '../img/google-logo.png'
import face from '../img/facebook.png'
import insta from '../img/instagram.png'
import wiki from '../img/wiki-black.png'
import twit from '../img/twitter.png'

const BlogPosts = () => {
    const data = [{ title: 'Youtube', description: 'Description about post', url: 'http://www.youtube.com', src: yt },
    { title: 'Google', description: 'Description about post', url: 'http://www.google.com', src: google },
    { title: 'Facebook', description: 'Description about post', url: 'http://www.facebook.com', src: face },
    { title: 'Instagram', description: 'Description about post', url: 'http://www.instagram.com', src: insta},
    { title: 'Wikipedia', description: 'Description about post', url: 'http://www.wikipedia.com', src: wiki },
    { title: 'Twitter', description: 'Description about post', url: 'http://www.twitter.com', src: twit }]


    return (
        data.map((post, i) =>
            <Post key={i} title={post.title} description={post.description} url={post.url} src = {post.src} />
        )
    )
}

export default BlogPosts