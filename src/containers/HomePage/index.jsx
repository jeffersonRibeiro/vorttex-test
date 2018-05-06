import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import fetchBanners from './actions';

import Home from '../../components/page/Home';


class HomePage extends Component {
  componentDidMount() {
    this.props.fetchBanners();
  }

  render() {
    return (
      <Home
        banners={this.props.banners}
      />
    );
  }
}

HomePage.propTypes = {
  fetchBanners: PropTypes.func.isRequired,
  banners: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = state => ({
  banners: state.banners.items,
});

export default connect(mapStateToProps, { fetchBanners })(HomePage);
