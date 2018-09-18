import $ from 'jquery';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Scrollbars } from 'react-custom-scrollbars';
import './css/RsvpPage.css';

class RsvpPageAbleToAttend extends Component {
  render () {
    return (
      <div className="rsvp-guest-list animated slow fadeInUp">
        <p>Please feel free to bring children and plus-ones! All are welcome.</p>
        <p>All we ask is that you take the time to specify the name of each member of your party.</p>
        <div className="submit">
          Submit another intention
        </div>
      </div>
    );
  }
}

class RsvpPageUnableToAttend extends Component {
  render () {
    return (
      <div className="rsvp-unable-to-attend animated slow fadeInUp">
        <p>Although we will miss you during our wedding celebration, we hope we can see you soon!</p>
        <p>Please keep us in your prayers; we will surely be praying for you. We love you!</p>
        <div className="unable-note">
          <textbox value={this.state.unableNote} onChange={this.handleUnableNoteChange} placeholder="(Optional) Type a message to the Bride and Groom here."/>
        </div>
        <div className="submit">
          Submit your RSVP
        </div>
      </div>
    );
  }
}

class RsvpPageSuccess extends Component {
  render () {
    return (
      <div className="prayer-submit-success animated slow fadeInUp">
        <p>Thank you so much for your prayer intention.</p>
        <p>Be assured we are flooding the Heavens with prayers for you!</p>
        <div className="">
          <input type="text" value={this.state.name} onChange={this.handleNameChange} placeholder="(Optional) Type your name here."/>
        </div>
      </div>
    );
  }
}

class RsvpPage extends Component {
  constructor (props) {
    super(props);
    this.state = { prayer: '', name: '', ableToAttend: true, unableToAttend: false };

    this.handlePrayerChange = this.handlePrayerChange.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleStatusChange = this.handleStatusChange.bind(this);

    this.resetNeedsPrayer = this.resetNeedsPrayer.bind(this);

    this.submitPrayer = this.submitPrayer.bind(this);
    this.submitSuccess = this.submitSuccess.bind(this);

    this.keyPress = this.keyPress.bind(this);
  }

  componentWillMount () {
    document.addEventListener('keydown', this.keyPress);
  }

  componentWillUnmount () {
    document.removeEventListener('keydown', this.keyPress);
  }

  submitPrayer () {
    if (this.state.prayer) {
      this.setState({ isSubmitting: true });

      $.ajax({
        type: 'PUT',
        url: '/rsvp',
        contentType: 'application/json',
        data: JSON.stringify(this.state),
        error: this.submitSuccess
      });
    } else {
      this.setState({ needsPrayer: true });
      setTimeout(this.resetNeedsPrayer, 1500);
    }
  }

  resetNeedsPrayer () {
    this.setState({ needsPrayer: false });
  }

  handlePrayerChange (e) {
    this.setState({ prayer: e.target.value });
  }

  handleNameChange (e) {
    this.setState({ name: e.target.value });
  }

  handleStatusChange (e) {
    this.setState({
      ableToAttend: !this.state.ableToAttend,
      unableToAttend: !this.state.unableToAttend
    })
  }

  submitSuccess () {
    ReactDOM.render(<RsvpPageSuccess />, document.getElementById('prayer-form-container'));
  }

  keyPress (e){
    if (e.keyCode === 13){
      this.submitPrayer();
    }
  }

  render () {
    let formClassName = 'prayer-form animated slow';

    if (this.state.needsPrayer) {
      formClassName += ' shake';
    } else if (this.state.isSubmitting) {
      formClassName += ' fadeOutDown';
    }

    return (
      <div className="rsvp-page-content">
        <Scrollbars renderThumbVertical={({ style, ...props }) =>
          <div {...props} style={{ ...style, backgroundColor: '#FFF', width: '4px', opacity: '0.5'}} />
        }>
        <div className="scrollable-content">
          <p>Welcome! Thank you for taking the time to RSVP to our wedding!</p>

          <div id="rsvp-form-container">
            <p>Please begin by specifying whether or not your party is able to attend.</p>
            <div className={formClassName}>
              <label className="checkbox-label">We are able to attend
                <input type="radio" checked={this.state.ableToAttend} onChange={this.handleStatusChange}/>
                <span className="checkmark"></span>
              </label>
              <label className="checkbox-label">We are unable to attend
                <input type="radio" checked={this.state.unableToAttend} onChange={this.handleStatusChange}/>
                <span className="checkmark"></span>
              </label>
              <div className="name">
                <input type="text" value={this.state.name} onChange={this.handleNameChange} placeholder="(Optional) Type your name here."/>
              </div>
              <div className="submit" onClick={this.submitPrayer}>
                Submit
              </div>
            </div>
          </div>
        </div>
        </Scrollbars>
      </div>
    );
  }
}

export default RsvpPage;
