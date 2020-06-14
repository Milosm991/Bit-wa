import React from 'react'
import "./RelatedVideos.scss"

class RelatedVideos extends React.Component {


    render() {
        return (
            <div onClick={() => this.props.relatedVideoId(this.props.id)} className='RelatedVideos' key={this.key} data-id={this.props.id}>
                <img src={this.props.img} data-id={this.props.id} alt=''></img>
                <p>{this.props.name}</p>
            </div>
        )
    }
}

export default RelatedVideos
