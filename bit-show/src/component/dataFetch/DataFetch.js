import React from 'react'
import './DataFetch.css'
import SingleShow from '../singleShow/SingleShow'


const url = "http://api.tvmaze.com/shows"

class DataFetch extends React.Component {
    constructor() {
        super()
        this.state = {
            shows: []
        }
    }

    componentDidMount() {
        fetch(url)
            .then(resolve => resolve.json())
            .then(data =>
                this.setState({ shows: data }))
    }

    render() {
        return (
            <div>
                {console.log(this.state.shows)}
                < h2 > Popular Shows</h2>
                <div className='DataFetch'>
                    {this.state.shows.sort((a, b) => a.rating.average > b.rating.average ? -1 : 1).map((show, i) => {
                        if (i < 50) {
                            return (
                                <SingleShow
                                    key={i}
                                    src={show.image.medium}
                                    name={show.name}
                                    link={show.url}
                                    avgRate={show.rating.average} />
                            )
                        }
                    }
                    )}

                </div>
            </div >
        )
    }
}

export default DataFetch