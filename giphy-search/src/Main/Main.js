import React from 'react'
import "./Main.css"

const Main = (props) => {
    return (
        <div className="Main">
            <div className="Main__image">
                {props.results.map((gif, i) => <img key={i} src={gif.images.downsized.url} alt='gif'></img>)}
            </div>

        </div>
    )
}
export default Main