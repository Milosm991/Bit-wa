
import React from 'react'
import './MainSection.scss'

class MainSection extends React.Component {

    render() {
        return (
            <div className="MainSection">
                <div className='MainSection__card' key={this.key}>
                    <img onClick={() => this.props.getId(this.props.id)} src={this.props.img} data-id={this.props.id} alt=''></img>
                    <p>{this.props.name}</p>
                </div>
            </div>
        )
    }
}
export default MainSection