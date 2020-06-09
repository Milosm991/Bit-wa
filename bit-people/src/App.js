import React from 'react';
import Header from './components/Header/Header.js'
import Footer from './components/Footer/Footer.js'
import Users from "./components/Users/Users.js"
import SearchBar from './components/SearchBar/SearchBar.js';


class App extends React.Component {
  constructor() {
    super()

    this.state = {
      isListView: true,
      inputValue: ''
    }

    this.changeViewMode = this.changeViewMode.bind(this)
    this.onSearchingUsers = this.onSearchingUsers.bind(this)
  }

  onSearchingUsers = (event) => {
    console.log(event.target.value);
    
    this.setState({
      inputValue: event.target.value
    })
  }

  changeViewMode = () => {
    this.setState({ isListView: !this.state.isListView })

  }

  render() {
    return (
      <div >
        <Header changeView={this.changeViewMode} isListView={this.isListView} />
        <SearchBar search={this.onSearchingUsers}/>
        <Users isListView={this.state.isListView} searchState={this.inputValue} />
        <Footer />
      </div>
    );
  }

}

export default App;
