import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './HomePage.css';

class HomePage extends Component {
  render () {

    return (
      <div className="homepage">
        <div className="photo-wrap fixed-aspect left">
          <div className="proposal image" />
        </div>
        <table className="countdown" align="center">
          <tr>
            <td>{this.props.timeRemainingObject.days}</td>
            <td>{this.props.timeRemainingObject.hours}</td>
            <td>{this.props.timeRemainingObject.minutes}</td>
            <td>{this.props.timeRemainingObject.seconds}</td>
          </tr>
          <tr>
            <td>days</td>
            <td>hours</td>
            <td>minutes</td>
            <td>seconds</td>
          </tr>
        </table>
        <div className="photo-wrap fixed-aspect right">
          <div className="baptism image" />
        </div>
      </div>
    );
  }
}

HomePage.PropTypes = {
  timeRemainingObject: PropTypes.object
};

export default HomePage;
