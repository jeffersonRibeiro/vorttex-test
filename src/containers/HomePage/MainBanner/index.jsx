import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Slider from 'react-slick';
import './style.scss';

import fetchBanners from '../actions';
import Banner from '../../../components/UI/Banner';

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

class MainBanner extends Component {
  componentDidMount() {
    this.props.fetchBanners();
  }
  render() {
    const bannerList = this.props.banners.map(b => <Banner key={b.url} bg={b.url} title={b.title} subtitle={b.subtitle} link={b.link} />);

    return (
      <Slider {...settings}>
        {bannerList}
      </Slider>
    );
  }
}

MainBanner.propTypes = {
  fetchBanners: PropTypes.func.isRequired,
  banners: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = state => ({
  banners: state.banners.items,
});

export default connect(mapStateToProps, { fetchBanners })(MainBanner);
