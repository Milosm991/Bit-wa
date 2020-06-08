import React from 'react'
import './SingleShow.css'
import PropTypes from 'prop-types'
import "./SingleShow.css"

const SingleShow = (props) => {
    const { name, src, link, avgRate } = props
    return (
        <div className="SingleShow">
            <img src={src}></img>
            <a href={link} target="_blank"><h2><i>{name}</i></h2></a>
            <p className='SingleShow__rate'>Average rating: <i>{avgRate}</i></p>
        </div>

    )
}
export default SingleShow

SingleShow.propTypes = {
    src: PropTypes.string,
    name: PropTypes.string,
    link: PropTypes.string,
    avgRate: PropTypes.number
}

