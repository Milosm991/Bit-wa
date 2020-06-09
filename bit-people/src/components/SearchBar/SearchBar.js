import React from 'react'
import './SearchBar.css'

const SearchBar = ({search}) => {
    return (
        <div  className="SearchBar">
            <i className="fa fa-search"></i><input type="search" onChange={search}></input>
        </div>
    )
}
export default SearchBar