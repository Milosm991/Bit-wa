import React from 'react';
import Header from './component/header/Header.js';
import Footer from './component/footer/Footer.js';
import DataFetch from './component/dataFetch/DataFetch.js';

function App() {
  return (
    <div className="App">
      <Header />
      <DataFetch />
      <Footer />
    </div>
  );
}

export default App;
