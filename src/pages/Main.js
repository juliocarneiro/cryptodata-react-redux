import React, { Component } from 'react';
import CoinList from '../components/CoinList'

class Main extends Component {
  render() {
    return (
      <div className="container animated fadeIn">
        <header className="mt-5 mb-5 text-center">
          <h1>CRYPTODATA</h1>
        </header>
        <div className="row">
          <CoinList />
        </div>
      </div>
    );
  }
}

export default Main;