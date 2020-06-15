import React from 'react'
import "./RelatedVideos.scss"

class RelatedVideos extends React.Component {

    a = () => {
        this.props.relatedVideoId(this.props.id)
        this.props.playedVideos(this.props.id)
    }


    render() {
        return (
            <div onClick={() => this.a()} className='RelatedVideos' key={this.key} data-id={this.props.id}>
                <img src={this.props.img} data-id={this.props.id} alt=''></img>
                <p>{this.props.name}</p>
            </div>
        )
    }
}

export default RelatedVideos
