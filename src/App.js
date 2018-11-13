import React, { Component } from 'react';
import { NavLink, Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';

import HomePage from './HomePage';
import RsvpPage from './RsvpPage';
import DetailsPage from './DetailsPage';
import StoryPage from './StoryPage';
import AnnaStoryPage from './AnnaStoryPage';
import NickStoryPage from './NickStoryPage';
import PartyPage from './PartyPage';
import PrayersPage from './PrayersPage';
import PhotosPage from './PhotosPage';
import RegistryPage from './RegistryPage';
import ComingSoonPage from './ComingSoonPage';

import './css/App.css';

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

  render () {
    var timeRemainingObject = this.getTimeRemaining(this.state.countdownDistance);

    return (
      <Router>
        <Route render={({location}) => (
          <div className="content">
            <header className="header">
              <h1 className="title">Anna and Nick are getting married!</h1>
              <div className="button-section">
                <NavLink exact to="/" activeClassName="selected">
                  <div className="home button">
                    <div className="button-text">home</div>
                  </div>
                </NavLink>
                <NavLink to="/details" activeClassName="selected">
                  <div className="details button">
                    <div className="button-text">details</div>
                  </div>
                </NavLink>
                <NavLink to="/story" activeClassName="selected">
                  <div className="details button">
                    <div className="button-text">our story</div>
                  </div>
                </NavLink>
                <NavLink to="/party" activeClassName="selected">
                  <div className="party button">
                    <div className="button-text">bridal party</div>
                  </div>
                </NavLink>
                <NavLink to="/prayers" activeClassName="selected">
                  <div className="prayer button">
                    <div className="button-text">prayers</div>
                  </div>
                </NavLink>
                <NavLink to="/photos" activeClassName="selected">
                  <div className="photos button">
                    <div className="button-text">photos</div>
                  </div>
                </NavLink>
                <NavLink to="/registry" activeClassName="selected">
                  <div className="registry button">
                    <div className="button-text">registry</div>
                  </div>
                </NavLink>
              </div>
            </header>
            <div className="page-content">
              <CSSTransition key={location.key} classNames="fade" timeout={1000}>
                <Switch>
                  <Route exact path='/' render={() => (
                    <HomePage timeRemainingObject={timeRemainingObject} />
                  )} />
                  <Route path='/rsvp' component={RsvpPage}/>
                  <Route path='/details' component={DetailsPage}/>
                  <Route path='/story' component={StoryPage}/>
                  <Route path='/anna' component={AnnaStoryPage}/>
                  <Route path='/nick' component={NickStoryPage}/>
                  <Route path='/party' component={PartyPage}/>
                  <Route path='/prayers' component={PrayersPage}/>
                  <Route path='/photos' component={PhotosPage}/>
                  <Route path='/registry' component={RegistryPage}/>
                </Switch>
              </CSSTransition>
            </div>
          </div>
        )} />
      </Router>
    )
  }
}

export default App;
