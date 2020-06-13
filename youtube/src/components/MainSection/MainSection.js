
import React from 'react'
import './MainSection.scss'

class MainSection extends React.Component {

    getVideoId = (e) => {

        const id = e.target.getAttribute('data-id')

        this.props.func(id)
    }
    render() {
        return (
            <div className="MainSection">
                <div className='MainSection__card' key={this.key}>
                    <img onClick={this.getVideoId} src={this.props.img} data-id={this.props.id}></img>
                    <p>{this.props.name}</p>
                </div>
            </div>
        )
    }
}
export default MainSection