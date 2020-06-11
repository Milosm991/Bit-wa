import React from 'react'
import './Search.css'

class Search extends React.Component {
    constructor(props) {
        super(props)
    }
    onSearch = (e) => {
        if (e.keyCode === 13) {
            console.log(e.target.value);
            
            return this.props.fetch(e.target.value)
        }

    }
    render() {

        return (
            <div className="Search">
                <h2 className="Search__title">SEARCH GIPHY</h2>
                <input className="Search__input" type="search" placeholder="search" onKeyUp={this.onSearch}></input>
            </div>
        )
    }
}

export default Search