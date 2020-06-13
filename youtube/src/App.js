import React from 'react';
import { fetchVideos } from './fetch.js'
import Iframe from './components/Iframe/Iframe.js';
import Search from './components/Search/Search.js';
import MainSection from './components/MainSection/MainSection.js';
import Header from './components/Header/Header.js'
import "./App.scss"

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      videos: [],
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
    })
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
      </div>
    );
  }

}

export default App;
