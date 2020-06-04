import React from 'react';

class Post extends React.Component {
    constructor(props) {
        super()
    }
    render() {
        return (
            <a className="Post" href={this.props.url} target='_blank'>
                <li className='Post__list'>
                    <h4 className='Post__list_title'>{this.props.title}</h4>
                    <p className='Post__list_description'>{this.props.description}</p>
                </li >
            </a>
        )
    }

};

export default Post