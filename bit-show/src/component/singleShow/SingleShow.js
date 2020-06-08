import React from 'react'
import './SingleShow.css'
import PropTypes from 'prop-types'
import "./SingleShow.css"

const SingleShow = (props) => {
    const { name, src, link } = props
    return (
        <div className="SingleShow">
            <img src={src}></img>
            <a href={link} target="_blank"><h3><i>{name}</i></h3></a>
        </div>
    )
}
export default SingleShow

SingleShow.propTypes = {
    src: PropTypes.string,
    name: PropTypes.string,
    link: PropTypes.string
}

