import React, { Component } from 'react';
import { NavLink, Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import AnnaStoryPage from './AnnaStoryPage';
import NickStoryPage from './NickStoryPage';
import './css/StoryPage.css';

class StoryPage extends Component {
  constructor (props) {
    super(props)
    this.state = {innerStory: false}
    this.innerNavigate = this.innerNavigate.bind(this)
  }

  innerNavigate () {
    this.setState({innerStory: true})
  }

  render () {
    const timeout = { enter: 3000, exit: 2000 };

    return (
      <Router>
        <Route render={({location}) => (
          <div className="story-page-content">
            <div className="avatar-wrap" hidden={this.state.innerStory}>
              <NavLink to="/anna">
                <div className={this.state.innerStory ? "avatar anna animated bounceOutLeft" : "avatar anna animated"} onClick={this.innerNavigate}/>
              </NavLink>
              <NavLink to="/nick">
                <div className={this.state.innerStory ? "avatar nick animated bounceOutRight" : "avatar nick animated"} onClick={this.innerNavigate}/>
              </NavLink>
            </div>
            <CSSTransition key={location.key} classNames="fade" timeout={timeout}>
              <Switch>
                <Route path='/anna' component={AnnaStoryPage}/>
                <Route path='/nick' component={NickStoryPage}/>
              </Switch>
            </CSSTransition>
          </div>
        )} />
      </Router>
    );
  }
}

export default StoryPage;
