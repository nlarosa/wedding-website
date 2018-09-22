import $ from 'jquery';
import React, { Component } from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import './css/RsvpPage.css';

class RsvpPageAbleToAttend extends Component {
  constructor (props) {
    super(props)
    this.newGuest = {
      name: '',
      under10: false,
      vegetarian: false,
      glutenFree: false
    }

    this.state = { guests: [ Object.assign({}, this.newGuest) ] }

    this.handleNameChange = this.handleNameChange.bind(this)
    this.handleEmailChange = this.handleEmailChange.bind(this)
    this.handleNoteChange = this.handleNoteChange.bind(this)

    this.checkAndCreateNew = this.checkAndCreateNew.bind(this)
    this.checkAndContinue = this.checkAndContinue.bind(this);

    this.keyPress = this.keyPress.bind(this)
  }

  keyPress (e) {
    if (e.keyCode === 13){
      this.createNewInput();
    }
  }

  handleNameChange (e, index) {
    this.state.guests[index].name = e.target.value
  }

  handleBoolChange (e, index, key) {
    this.state.guests[index][key] = e.target.checked
  }

  handleEmailChange (e) {
    this.setState({ email: e.target.value })
  }

  handleNoteChange (e) {
    this.setState({ note: e.target.value })
  }

  createInputs () {
    return this.state.guests.map((guest, index) => {
      return this.createInput(guest, index)
    })
  }

  canCreateNewName () {
    return !!this.state.guests[this.state.guests.length - 1].name
  }

  canContinue () {
    return !!this.state.guests[0].name
  }

  checkAndCreateNew () {
    if (this.canCreateNewName()) {
      var newGuest = Object.assign({}, this.newGuest)
      this.setState({ guests: this.state.guests.concat(newGuest) })
    }
  }

  checkAndContinue () { 
    if (this.canContinue()) {
      this.props.submitSecondPage();
    }
  }

  createInput (guest, index) {
    return (
      <tr className="rsvp-guest-input">
        <td>{index + 1}.</td>
        <td className="guest-column"><input type="text" className="name"
          defaultValue={guest.name} onChange={(e) => this.handleNameChange(e, index)}
          placeholder="Guest Name"/></td>
        <td><input type="checkbox" className="boolean" defaultValue={guest.under10} 
          onBlur={(e) => this.handleBoolChange(e, index, 'under10')} /></td>
        <td><input type="checkbox" className="boolean" defaultValue={guest.vegetarian} 
          onBlur={(e) => this.handleBoolChange(e, index, 'vegetarian')} /></td>
        <td><input type="checkbox" className="boolean" defaultValue={guest.glutenFree} 
          onBlur={(e) => this.handleBoolChange(e, index, 'glutenFree')} /></td>
      </tr>
    )
  }

  guestListPage () {
    var addButtonClass = 'rsvp-button add-button '
    var continueButtonClass = 'rsvp-button continue-button '

    if (!this.canCreateNewName()) {
      addButtonClass += 'inactive'
    }

    if (!this.canContinue()) {
      continueButtonClass += 'inactive'
    }

    return (
      <div className="rsvp-form rsvp-guest-list animated slow fadeInUp">
        <p>We are so glad you will be able to join in our wedding celebration!</p>
        <p>Please take the time to specify the name of each member of your party who will be attending.</p>
        <p>Bringing plus-ones or children is highly encouraged!</p>
        <table className="guest-table" width="100%">
          <tr className="header-row">
            <th></th>
            <th className="guest-header">Guest Full Names</th>
            <th className="boolean-header">Under 10</th>
            <th className="boolean-header">Vegetarian</th>
            <th className="boolean-header">Gluten-free</th>
          </tr>
          {this.createInputs()}
        </table>
        <div className={addButtonClass} onClick={this.checkAndCreateNew}>
          Add another Guest
        </div>
        <div className={continueButtonClass} onClick={this.checkAndContinue}>
          Guest List is Complete
        </div>
      </div>
    );
  }

  finalPage () {
    var submitButtonClass = 'rsvp-button submit-button '

    if (this.props.submitting) {
      submitButtonClass += 'inactive'
    }

    return (
      <div className="rsvp-form rsvp-able-to-submit animated slow fadeInUp">
        <p>Thank you so much for your RSVP! We are so excited to celebrate with you!</p>
        <p>If you would like, leave your email address to directly receive any other updates.</p>
        <p>Please feel free to leave a note! See you soon!</p>
        <input type="text" className="note-text"
          defaultValue={this.state.email} onChange={this.handleEmailChange}
          placeholder="Email Address"/>
        <input type="text" className="note-text"
          defaultValue={this.state.note} onChange={this.handleNoteChange}
          placeholder="Note"/>
        <div className={submitButtonClass} onClick={() => this.props.submitRSVP(this.state)}>
          Submit your RSVP!
        </div>
      </div>
    );
  }

  render () {
    var page = this.props.page === 'ableToAttendInitial'
      ? this.guestListPage()
      : this.finalPage()

    return page
  }
}

class RsvpPageUnableToAttend extends Component {
  constructor (props) {
    super(props);
    this.state = { name: '', address: '', note: '' }

    this.handleNameChange = this.handleNameChange.bind(this)
    this.handleAddressChange = this.handleAddressChange.bind(this)
    this.handleNoteChange = this.handleNoteChange.bind(this)
  }

  canSubmit () {
    return this.state.name && this.state.address
  }

  handleNameChange (e) {
    this.setState({ name: e.target.value })
  }

  handleAddressChange (e) {
    this.setState({ address: e.target.value })
  }

  handleNoteChange (e) {
    this.setState({ note: e.target.note })
  }

  render () {
    let buttonClass = 'rsvp-button submit-button '

    if (!this.canSubmit() || this.props.isSubmitting) {
      buttonClass += 'inactive'
    }

    return (
      <div className="rsvp-form rsvp-unable-to-attend animated slow fadeInUp">
        <p>Although we will miss you during our wedding celebration, we hope we can see you soon!</p>
        <p>Please take the time to provide your name, address, and a note to the Bride and Groom.</p>
        <p>Please keep us in your prayers; we will surely be praying for you. We love you!</p>
        <input type="text" className="note-text"
          defaultValue={this.state.name} onChange={this.handleNameChange}
          placeholder="Full Name"/>
        <input type="text" className="note-text"
          defaultValue={this.state.address} onChange={this.handleAddressChange}
          placeholder="Address"/>
        <input type="text" className="note-text"
          defaultValue={this.state.note} onChange={this.handleNoteChange}
          placeholder="Note"/>
        <div className={buttonClass} onClick={() => this.props.submitRSVP(this.state)}>
          Submit your RSVP!
        </div>
      </div>
    );
  }
}

class RsvpPageSuccess extends Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <div className="rsvp-submit-success animated slow fadeInUp">
        <p>Thank you so much for your RSVP. We love you!</p>
        <p>Please keep us in your prayers for these last weeks before our wedding.</p>
      </div>
    );
  }
}

class RsvpPage extends Component {
  constructor (props) {
    super(props);
    this.state = { page: 'initial', ableToAttend: true };

    this.handleStatusChange = this.handleStatusChange.bind(this);

    this.submitFirstPage = this.submitFirstPage.bind(this)
    this.submitSecondPage = this.submitSecondPage.bind(this)
    this.submitRSVP = this.submitRSVP.bind(this)
    this.goToFinalPage = this.goToFinalPage.bind(this)

    this.keyPress = this.keyPress.bind(this);
  }

  componentWillMount () {
    document.addEventListener('keydown', this.keyPress);
  }

  componentWillUnmount () {
    document.removeEventListener('keydown', this.keyPress);
  }

  submitFirstPage () {
    if (this.state.ableToAttend) {
      this.setState({ page: 'ableToAttendInitial' })
    } else {
      this.setState({ page: 'unableToAttendInitial' })
    }
  }

  submitSecondPage () {
    if (this.state.ableToAttend) {
      this.setState({ page: 'ableToAttendFinal' })
    } else {
      this.setState({ page: 'unableToAttendFinal' })
    }
  }

  goToFinalPage () {
    this.setState({ submitting: false, page: 'final' })
  }

  submitRSVP (subState) {
    var finalData = Object.assign({}, this.state, subState)
    delete finalData.page

    if (finalData.name || finalData.guests.length) {
      if (finalData.guests) {
        finalData.guests = finalData.guests.filter((guest) => guest.name)
      }

      this.setState({ submitting: true })

      $.ajax({
        type: 'PUT',
        url: '/rsvp',
        contentType: 'application/json',
        data: JSON.stringify(finalData),
        success: this.goToFinalPage
      });
    }
  }

  backToInitialPage () {
    this.setState({ page: 'initial' })
  }

  handleStatusChange (e) {
    this.setState({
      ableToAttend: !this.state.ableToAttend
    })
  }

  keyPress (e){
    if (e.keyCode === 13){
      //this.submitPrayer();
    }
  }

  initialPage () {
    let formClassName = 'rsvp-form animated slow';

    return (
      <div className={formClassName}>
        <p>Welcome! Thank you for taking the time to RSVP to our wedding!</p>
        <p>Please begin by specifying whether or not your party is able to attend.</p>
        <label className="checkbox-label">We are able to attend
          <input type="radio" checked={this.state.ableToAttend} onChange={this.handleStatusChange}/>
          <span className="checkmark"></span>
        </label>
        <label className="checkbox-label">We are unable to attend
          <input type="radio" checked={!this.state.ableToAttend} onChange={this.handleStatusChange}/>
          <span className="checkmark"></span>
        </label>
        <div className="rsvp-button next-button" onClick={this.submitFirstPage}>
          Next Page
        </div>
      </div>
    )
  }

  render () {
    var generatedPage = this.state.page === 'initial'
      ? this.initialPage()
      : this.state.page === 'final'
        ? <RsvpPageSuccess />
        : this.state.ableToAttend
          ? <RsvpPageAbleToAttend page={this.state.page} keyPress={this.keyPress}
            submitSecondPage={this.submitSecondPage} submitRSVP={this.submitRSVP}
            submitting={this.state.submitting} />
          : <RsvpPageUnableToAttend page={this.state.page} keyPress={this.keyPress}
            submitSecondPage={this.submitSecondPage} submitRSVP={this.submitRSVP}
            submitting={this.state.submitting} />

    return (
      <div className="rsvp-page-content">
        <Scrollbars renderThumbVertical={({ style, ...props }) =>
          <div {...props} style={{ ...style, backgroundColor: '#FFF', width: '4px', opacity: '0.5'}} />
        }>
        <div className="scrollable-content">
          <div id="rsvp-form-container">
            {generatedPage}
          </div>
          <div className="rsvp-form-footer">
            If you experience technical issues (for which Nick apologizes in advance),
            please feel free to email us your RSVP at <b>little.way.larosas@gmail.com</b>
          </div>
        </div>
        </Scrollbars>
      </div>
    );
  }
}

export default RsvpPage;
