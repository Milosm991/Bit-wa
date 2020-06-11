import React from 'react'
import "./Main.scss"
import SingleCard from '../SingleCard/SingleCard'
import PropTypes from 'prop-types'

class Main extends React.Component {
    constructor(props) {
        super(props)
    }


    render() {
        return (
            <div className="Main">
                {this.props.results.map((gif, i) =>
                    <SingleCard
                        key={i}
                        src={gif.images.downsized.url}
                        id={gif.id}
                        removeItem={this.props.removeGif} />)}

            </div>
        )
    }
}

export default Main


Main.propTypes = {
    removeGif: PropTypes.func.isRequired
}