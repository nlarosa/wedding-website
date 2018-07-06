import React, { Component } from 'react';
import HomePage from './HomePage';
import BridalParty from './BridalParty';
import './App.css';

class App extends Component {
  constructor (props) {
    super(props);

    var now = Date.now();
    var countdownDate = new Date("Dec 15, 2018 14:00:00").getTime();

    this.state = {
      countdownDistance: countdownDate - now
    };
  }

  componentDidMount () {
    this.interval = setInterval(() =>
      this.setState({ 
        countdownDistance: this.state.countdownDistance - 1000
      }), 1000);
  }

  componentWillUnmount () {
    clearInterval(this.interval);
  }

  getTimeRemaining (countdownDistance) {
    var days = Math.floor(countdownDistance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((countdownDistance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((countdownDistance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((countdownDistance % (1000 * 60)) / 1000);

    return {
      days: days,
      hours: hours,
      minutes: minutes,
      seconds: seconds
    }
  }

  displayPage (newComponent) {
    console.log('HELLO! WORLD!');
  }

  render () {
    var timeRemainingObject = this.getTimeRemaining(this.state.countdownDistance);

    return (
      <div className="content">
        <header className="header">
          <h1 className="title">Anna and Nick are getting married!</h1>
          <div className="button-section">
            <div className="details button">
              <div className="button-text">details</div>
            </div>
            <div className="party button">
              <div className="button-text" onClick={() => {this.displayPage(BridalParty)}}>
                bridal party
              </div>
            </div>
            <div className="prayer button">
              <div className="button-text">prayers</div>
            </div>
            <div className="registry button">
              <div className="button-text">photos</div>
            </div>
            <div className="registry button">
              <div className="button-text">registry</div>
            </div>
          </div>
        </header>
        <HomePage timeRemainingObject={timeRemainingObject} />
        <div className="footer-wrap">
          <div className="footer ceremony">
            <p>Ceremony</p>
            <p>December 2018, 2:00pm</p>
            <p>St. Patrick's Catholic Church</p>
            <p>Columbus, OH</p>
          </div>
          <div className="footer reception">
            <p>Reception</p>
            <p>December 2018, 5:00pm</p>
            <p>Some Amazingly cool Venue</p>
            <p>Columbus, OH</p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
