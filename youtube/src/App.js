import React from 'react';
import { fetchVideos } from './fetch.js'
import { fetchRelatedVideos } from './fetch.js'
import Iframe from './components/Iframe/Iframe.js';
import Search from './components/Search/Search.js';
import MainSection from './components/MainSection/MainSection.js';
import RelatedVideos from './components/RelatedVideos/RelatedVideos.js'
import Header from './components/Header/Header.js'
import "./App.scss"

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      videos: [],
      relatedVideos: [],
      idVideo: ''
    }
  }

  onSearch = (value) => {
    fetchVideos(value)
      .then(data => {
        console.log(data);

        this.setState({ videos: data.items })
      })
  }

  getId = (id) => {
    this.setState({
      idVideo: id,
      videos: []
    }, () => {
      fetchRelatedVideos(this.state.idVideo)
        .then(data => {
          console.log(data);

          this.setState({
            relatedVideos: data.items
          })
        })
    })
  }

  relatedVideoId =(id) => {
    this.setState({ idVideo: id })
  }
  
  render() {
    return (
      <div className='App'>
        <Header />
        <Search searchVideos={this.onSearch} />
        <Iframe id={this.state.idVideo} />
        <div className="AppMain">
          {this.state.videos.map((item, i) =>
            <MainSection
              key={i}
              id={item.id.videoId}
              img={item.snippet.thumbnails.default.url}
              name={item.snippet.title}
              func={this.getId}
            />
          )}
        </div>
        <div className="RelatedVideosMain">
          {this.state.relatedVideos.map((item, i) =>
            <RelatedVideos
              key={i}
              id={item.id.videoId}
              relatedVideoId={this.relatedVideoId}
            />)
          }
        </div>
      </div>
    );
  }

}

export default App;