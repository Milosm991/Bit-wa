import React from 'react'
import "./RelatedVideos.scss"

class RelatedVideos extends React.Component {

    selectVideo = (e) => {
        const id = e.target.getAttribute('data-id')

        this.props.relatedVideoId(id)
    }
    render() {
        return (
            <div onClick={this.selectVideo} className='RelatedVideos' key={this.key} data-id={this.props.id}>
                <iframe className='Iframe' src={`https://www.youtube.com/embed/${this.props.id}`}></iframe>
            </div>
        )
    }
}

export default RelatedVideos
