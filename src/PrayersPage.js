import $ from 'jquery';
import React, { Component } from 'react';
import { NavLink, Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import ReactDOM from 'react-dom';
import { Scrollbars } from 'react-custom-scrollbars';
import './css/PrayersPage.css';

class PrayersPageSuccess extends Component {
  render () {
    var classString = 'prayer-submit-success animated slow';

    if (this.props.prepareToPray) {
      classString += ' fadeOutDown';
    } else if (this.props.submittedPrayer) {
      classString += ' fadeInUp';
    } else {
      classString += ' hidden';
    }

    return (
      <div className={classString} hidden={!this.props.submittedPrayer}>
        <p>Thank you so much for your prayer intention.</p>
        <p>Be assured we are flooding the Heavens with prayers for you!</p>
        <div className="submit again" onClick={this.props.resetSubmittedPrayer}>
          Submit another intention
        </div>
      </div>
    );
  }
}

class PrayersPage extends Component {
  constructor (props) {
    super(props);
    this.state = {
      prayer: '',
      name: '',
      submittedPrayer: false
    };

    this.handlePrayerChange = this.handlePrayerChange.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);

    this.resetNeedsPrayer = this.resetNeedsPrayer.bind(this);
    this.resetSubmittedPrayer = this.resetSubmittedPrayer.bind(this);

    this.submitPrayer = this.submitPrayer.bind(this);
    this.submitSuccess = this.submitSuccess.bind(this);

    this.needingPrayer = this.needingPrayer.bind(this);
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
      $.ajax({
        type: 'PUT',
        url: '/prayer',
        contentType: 'application/json',
        data: JSON.stringify(this.state),
        success: this.submitSuccess,
        error: this.needingPrayer
      });
    } else {
      this.needingPrayer();
    }
  }

  needingPrayer () {
    this.setState({ prepareToPray: false, isPraying: false, isSubmitting: false })
    this.setState({ needsPrayer: true });
    setTimeout(this.resetNeedsPrayer, 1500);
  }

  resetNeedsPrayer () {
    this.setState({ needsPrayer: false });
  }

  resetSubmittedPrayer () {
    this.setState({ prepareToPray: true })
    this.setState({ isSubmitting: false })
    this.setState({ prayer: '', name: '' })

    setTimeout(() => this.setState({ submittedPrayer: false }), 1000);
    setTimeout(() => this.setState({ prepareToPray: false, isPraying: true }), 2000);
  }

  submitSuccess () {
    this.setState({ isSubmitting: true, isPraying: false });
    setTimeout(() => this.setState({ submittedPrayer: true }), 1000);
  }

  handlePrayerChange (e) {
    this.setState({ prayer: e.target.value });
  }

  handleNameChange (e) {
    this.setState({ name: e.target.value });
  }

  keyPress (e){
    if (e.keyCode === 13) {
      this.submitPrayer();
    }
  }

  render () {
    let formClassName = 'prayer-form animated slow';

    if (this.state.needsPrayer) {
      formClassName += ' shake';
    } else if (this.state.isSubmitting) {
      formClassName += ' fadeOutDown';
    } else if (this.state.prepareToPray) {
      formClassName += ' hidden';
    } else if (this.state.isPraying) {
      formClassName += ' fadeInUp';
    }

    return (
      <div className="prayers-page-content">
        <Scrollbars renderThumbVertical={({ style, ...props }) =>
          <div {...props} style={{ ...style, backgroundColor: '#FFF', width: '4px', opacity: '0.5'}} />
        }>
        <div className="scrollable-content">
          <p>As we ask for your prayers during our time of marriage preparation,
            we hope we can pray for your intentations as well!</p>
          <p>All prayers submitted through this website will be included in our private prayers
            and will be included anonymously in the intentions of our Nupital Mass.</p>
          <div id="prayer-form-container">
            <div className={formClassName}>
              <div className="prayer">
                <input type="text" value={this.state.prayer} onChange={this.handlePrayerChange} placeholder="Type your prayer intention here."/>
              </div>
              <div className="name">
                <input type="text" value={this.state.name} onChange={this.handleNameChange} placeholder="(Optional) Type your name here."/>
              </div>
              <div className="submit" onClick={this.submitPrayer}>
                Submit
              </div>
            </div>
            <PrayersPageSuccess isPraying={this.state.isPraying}
              prepareToPray={this.state.prepareToPray}
              submittedPrayer={this.state.submittedPrayer}
              resetSubmittedPrayer={this.resetSubmittedPrayer} />
          </div>
        </div>
        </Scrollbars>
      </div>
    );
  }
}

export default PrayersPage;
