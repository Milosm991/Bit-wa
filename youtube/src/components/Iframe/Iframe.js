import React from 'react'
import './Iframe.scss'

const Iframe = (props) => {
    return props.id !== '' && <iframe className='Iframe' width="560" height="315" src={`https://www.youtube.com/embed/${props.id}`}></iframe>

}
export default Iframe
