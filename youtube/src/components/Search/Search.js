import React from 'react'
import "./Search.scss"


class Search extends React.Component {
    constructor(props) {
        super(props)

    }

    search = (e) => {
        if (e.keyCode !== 13) return;

        this.props.searchVideos(e.target.value)
    }
    render() {
        return (   
            <input className="Search" onKeyUp={this.search} type="search" placeholder='Search'></input>
        )
    }

}
export default Search