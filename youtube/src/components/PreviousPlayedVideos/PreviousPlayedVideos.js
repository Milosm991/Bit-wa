
import React from 'react'
import './PreviousPlayedVideos.scss'

class MainSection extends React.Component {



    render() {
        return (
            <div className="PreviousPlayedVideos">
                <div className='PreviousPlayedVideos__card' key={this.key}>
                    <img  src={this.props.img} data-id={this.props.id} alt=''></img>
                    <p>{this.props.name}</p>
                </div>
            </div>
        )
    }
}
export default MainSection