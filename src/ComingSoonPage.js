import React, { Component } from 'react';
import './css/ComingSoonPage.css';

class ComingSoonPage extends Component {
  render () {

    return (
      <div className="coming-soon-page-content">
        <div className="nick-hacking-wrap">
          <div className="nick-hacking-announcement-header">
            Coming soon!
          </div>
          <div className="nick-hacking-announcement">
            Nick is working hard at it!
          </div>
          <div className="nick-hacking" />
        </div>
      </div>
    );
  }
}

export default ComingSoonPage;
