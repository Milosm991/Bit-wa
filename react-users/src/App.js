import React from 'react';
import Header from './components/Header/Header';
import Users from './components/Users/Users';
import Footer from './components/Footer/Footer';
import GridUsers from './components/Users/GridUsers'



function App() {
  return (
    <div>
      <Header />
      <Users />
      <GridUsers />
      <Footer />
    </div>
  );
}

export default App;
