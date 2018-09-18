import React, { Component } from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import { OpenCeremonyMaps,
  OpenReceptionMaps,
  OpenHyattBooking,
  OpenHamptonBooking,
  OpenMarriottBooking } from './utils';
import './css/DetailsPage.css';

class DetailsPage extends Component {
  render () {

    return (
      <div className="details-page-content">
        <Scrollbars renderThumbVertical={({ style, ...props }) =>
          <div {...props} style={{ ...style, backgroundColor: '#FFF', width: '4px', opacity: '0.5'}} />
        }>
        <div className="scrollable-content">
          <div className="ceremony-content third" onClick={OpenCeremonyMaps}>
            <div className="centered-header">Ceremony</div>
            <p>The Nupital Mass uniting</p>
            <p>Anna Frances Williams &amp; Nicholas Christopher LaRosa</p>
            <p>St. Patrick Catholic Church</p>
            <p>280 North Grant Avenue</p>
            <p>Begins promptly at 2:00pm</p>
            <p>December 15th, 2018</p>
            <p>Black Tie Optional</p>
          </div>
          <div className="reception-content third" onClick={OpenReceptionMaps}>
            <div className="centered-header">Reception</div>
            <p><i>Join us for dinner, drinks, and dancing as we begin our new life together!</i></p>
            <p>St. Andrew Catholic Church</p>
            <p>1899 McCoy Road</p>
            <p><i>Please enter at McCoy Road entrance. Signs will direct guests to the Parish Hall.</i></p>
            <p>6:00pm to 12:00am Midnight</p>
            <p>December 15th, 2018</p>
            <p>Black Tie Optional</p>
          </div>
          <div className="accomodations-content third">
            <div className="centered-header">Accomodations</div>
            <div className="accomodation-content hampton" onClick={OpenHamptonBooking}>
              <p>Hampton Inn &amp; Suites - Columbus/University Area</p>
              <p>Click here to book online!</p>
            </div>
            <div className="accomodation-content hyatt" onClick={OpenHyattBooking}>
              <p>Hyatt Place - Columbus/Dublin</p>
              <p>Click here to book online!</p>
            </div>
            <div className="accomodation-content marriott" onClick={OpenMarriottBooking}>
              <p>Marriott - Columbus University Area</p>
              <p>Click here to book online!</p>
            </div>
          </div>
        </div>
        </Scrollbars>
      </div>
    );
  }
}

export default DetailsPage;
