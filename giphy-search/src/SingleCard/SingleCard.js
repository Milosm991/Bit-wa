import React from 'react'
import PropTypes from 'prop-types'

const SingleCard = ({ key, src, id, removeItem }) => {
    return (
        <div key={key} className="Main__card">
            <img
                src={src}
                alt='gif'>
            </img>
            <button onClick={() => removeItem(id)} className="Main__button">X</button>
        </div>
    )

}


export default SingleCard

SingleCard.propType = {
    src: PropTypes.string,
    id: PropTypes.string,
    removeItem: PropTypes.func.isRequired
}