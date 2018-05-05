import React, { Component } from 'react';

import Home from '../../components/Page/Home';


class HomePage extends Component {
  state = {
    banners: [
      {
        url: 'http://localhost:8001/images/bg-one.jpg',
        title: 'Título Banner',
        subtitle: 'Uma empresa de investimento privado, focada na criação de valor a longo prazo com abordagem de dono.',
        link: '#abc',
      },
      {
        url: 'test.jpg',
        title: 'Lorem hi',
        subtitle: 'lorem blabahah',
        link: '#abc',
      },
    ],
  }

  componentDidMount() {

  }

  render() {
    return (
      <Home
        banners={this.state.banners}
      />
    );
  }
}


export default HomePage;
