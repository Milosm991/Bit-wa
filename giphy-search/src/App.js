import React from 'react';
import Header from './Header/Header';
import Search from './Search/Search.js'
import Main from './Main/Main.js'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      key: 'YNfeRD5RHIO0Y90vMTCzz3iAwzwVEKwF',
      inputValue: '',
      results: []

    }
  }

  fetchGiphys = () => {
    fetch(`https://api.giphy.com/v1/gifs/search?api_key=${this.state.key}&q=${this.state.inputValue}&limit=25&offset=0&rating=G&lang=en`)
      .then(resolve => resolve.json())
      .then(res => {
        console.log(res);

        this.setState({ results: res.data })
      })
  }

  getData = (searchValue) => {
    this.setState({ inputValue: searchValue }, () => this.fetchGiphys())
  }

  removeGif = (id) => {
    const newArray = this.state.results.filter(item => item.id !== id)
    this.setState({ results: newArray })

  }

  render() {
    return (
      <div>
        <Header />
        <Search fetch={this.getData} />
        <Main removeGif={this.removeGif} results={this.state.results} />
      </div>
    );
  }
}
export default App;
