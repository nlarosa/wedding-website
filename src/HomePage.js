import React, { Component } from 'react';
import { NavLink, Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import PropTypes from 'prop-types';
import { OpenLink } from './utils';
import './css/HomePage.css';

import DelayLink from './DelayLink';
import RsvpPage from './RsvpPage';

class HomePage extends Component {
  constructor (props) {
    super(props)
    this.state = {rsvpPage: false, defaultContent: true}
    this.innerNavigate = this.innerNavigate.bind(this)
    this.hideDefaultContent = this.hideDefaultContent.bind(this)
  }

  innerNavigate () {
    this.setState({rsvpPage: true})
    setTimeout(this.hideDefaultContent, 1000)
  }

  hideDefaultContent () {
    this.setState({defaultContent: false})
  }

  render () {

    return (
      <Router>
        <Route render={({location}) => (
          <div className="homepage-content">
            <div className={this.state.rsvpPage ?
              "default-homepage-content animated fadeOutDown" : "default-homepage-content animated"}
              hidden={!this.state.defaultContent}>
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
              <div className="rsvp-button-wrap">
                <DelayLink to="/rsvp" delay={1000} onDelayEnd={(e, to) => {}}>
                  <div onClick={this.innerNavigate}>
                    RSVP Here!
                  </div>
                </DelayLink>
              </div>
              <div className="photo-wrap fixed-aspect right">
                <div className="baptism image" />
              </div>
              <div className="footer-wrap">
                <div className="footer ceremony" onClick={() => OpenLink('https://goo.gl/maps/mSDZ32e7min')}>
                  <p>Ceremony</p>
                  <p>December 15th, 2018, 2:00pm</p>
                  <p>St. Patrick's Catholic Church</p>
                  <p>Columbus, OH</p>
                </div>
                <div className="footer reception" onClick={() => OpenLink('https://goo.gl/maps/fJD92C6vGVr')}>
                  <p>Reception</p>
                  <p>December 15th, 2018, 6:00pm</p>
                  <p>St. Andrew's Catholic Church</p>
                  <p>Upper Arlington, OH</p>
                </div>
              </div>
            </div>
            <Switch>
              <Route path='/rsvp' component={RsvpPage}/>
            </Switch>
          </div>
        )} />
      </Router>
    );
  }
}

HomePage.PropTypes = {
  timeRemainingObject: PropTypes.object
};

export default HomePage;
