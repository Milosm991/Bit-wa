import React from 'react';



class Post extends React.Component {
    constructor(props) {
        super()

    }
    render() {
        return (
            <a className="Post" href={this.props.url} target='_blank'>
                <li className='Post__list'>
                    <div className = 'Post__list_text'>
                        <h4 className='Post__list_text--title'>{this.props.title}</h4>
                        <p className='Post__list_text--description'>{this.props.description}</p>
                    </div>
                    <img src={this.props.src} className='Post__list_image'></img>
                    
                </li >
            </a>
        )
    }

};

export default Post