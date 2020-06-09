import React from 'react';
import Header from './components/Header/Header.js'
import Footer from './components/Footer/Footer.js'
import Users from "./components/Users/Users.js"

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      isListView: true
    }

    this.changeViewMode = this.changeViewMode.bind(this)

  }

  changeViewMode = () => {
    this.setState({ isListView: !this.state.isListView })

  }

  render() {
    return (
      <div >
        <Header changeView={this.changeViewMode} isListView={this.isListView} />
        <Users isListView={this.state.isListView} />
        <Footer />
      </div>
    );
  }

}

export default App;
