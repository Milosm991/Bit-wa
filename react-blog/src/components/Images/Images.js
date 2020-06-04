import React from 'react'

const Images = () => {
    
    const images = [{src: '../img/yt.jpg'},
    {src: '../img/google-logo.png'},
    {src: '../img/facebook.png'},
    {src: '../img/instagram.png'},
    {src: '../img/wiki.jpg'},
    {src: '../img/twitter.png'}]
return(
    images.map(img => <img src={img.src}></img>)
)}


export default Images