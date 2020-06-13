import React from 'react'
import './Iframe.scss'

const Iframe = (props) => {
    return props.id !== '' && <iframe className='Iframe' width="800" height="400" src={`https://www.youtube.com/embed/${props.id}`}></iframe>

}
export default Iframe
