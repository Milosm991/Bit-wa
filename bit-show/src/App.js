import React from 'react';
import Header from './component/header/Header.js';
import Footer from './component/footer/Footer.js';
import DataFetch from './component/dataFetch/DataFetch.js';
import Container from 'react-bootstrap/Container'

function App() {
  return (
    <Container fluid>
      <Header />
      <DataFetch />
      <Footer />
    </Container>
  );
}

export default App;
