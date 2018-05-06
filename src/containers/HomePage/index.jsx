import React, { Component } from 'react';

import Home from '../../components/Page/Home';

import request from '../../utils/request';


class HomePage extends Component {
  state = {
    banners: [],
  }

  componentDidMount() {
    request('http://localhost:8001/api/banners/').then((res) => {
      console.log(res);
      this.setState({ banners: res.banners });
    });

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
