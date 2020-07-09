import React from 'react';
import { fetchVideos } from './fetch.js'
import { fetchRelatedVideos } from './fetch.js'
import Iframe from './components/Iframe/Iframe.js';
import Search from './components/Search/Search.js';
import MainSection from './components/MainSection/MainSection.js';
import RelatedVideos from './components/RelatedVideos/RelatedVideos.js'
import Header from './components/Header/Header.js'
import PreviousPlayedVideos from './components/PreviousPlayedVideos/PreviousPlayedVideos.js'
import "./App.scss"

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      videos: [],
      relatedVideos: [],
      previousPlayed: [],
      history: [],
      idVideo: ''
    }

  }
  onSearch = (value) => {
    setTimeout(() => {
      fetchVideos(value)
        .then(data => {
          console.log(data);

          this.setState({ videos: data.items })
        })
    }, 2000)
  }


  getId = (id) => {
    this.setState({
      idVideo: id,
      previousPlayed: [id],
      videos: []
    }, () => {
      fetchRelatedVideos(this.state.idVideo)
        .then(data => {
        

          this.setState({
            relatedVideos: data.items
          })
        })
    })
  }

  relatedVideoId = (id) => {
    sessionStorage.setItem('prevPlayed', JSON.stringify([...this.state.previousPlayed, id]))
    this.setState({ idVideo: id, previousPlayed: JSON.parse(sessionStorage.getItem('prevPlayed')) })
  }

  playedVideos = (id) => {
    const filterdVideos = this.state.videos.filter(item => {
      if (item.id.videoId === id) {
        return true
      }
    })
    this.setState({ history: filterdVideos })
  }

  playedVideoss = (id) => {
    const filterdVideos = this.state.relatedVideos.filter(item => {
      if (item.id.videoId === id) {
        return true
      }
    })
    this.setState({ history: [...this.state.history, ...filterdVideos] })
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
              img={item.snippet.thumbnails.high.url}
              name={item.snippet.title}
              getId={this.getId}
              setData={this.setData}
              playedVideos={this.playedVideos}
            />
          )}
        </div>
        {this.state.relatedVideos.length ? 
        <div className="RelatedVideosMain">
          <h3>Related Videos</h3>
          {this.state.relatedVideos.map((item, i) =>
            <RelatedVideos
              key={i}
              img={item.snippet.thumbnails.medium.url}
              name={item.snippet.title}
              id={item.id.videoId}
              relatedVideoId={this.relatedVideoId}
              setData={this.setData}
              playedVideos={this.playedVideoss}
            />)
          }
        </div>: null }
          {this.state.history.length ? 
        <div>
          <h3>Previously Played</h3>
        {this.state.history.map((item, i) =>
          <PreviousPlayedVideos
            key={i}
            img={item.snippet.thumbnails.default.url}
            name={item.snippet.title}
            id={item.id.videoId} />
        )}
        </div>: null}
      </div>
    );
  }

}

export default App;