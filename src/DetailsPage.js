import React, { Component } from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import './css/DetailsPage.css';

class DetailsPage extends Component {
  render () {

    return (
      <div className="details-page-content">
        <Scrollbars renderThumbVertical={({ style, ...props }) =>
          <div {...props} style={{ ...style, backgroundColor: '#FFF', width: '4px', opacity: '0.5'}} />
        }>
        <div className="scrollable-content">
          <div className="ceremony-content">
            <div className="centered-header">Ceremony</div>
            <p>The Nupital Mass uniting</p>
            <p>Anna Frances Williams &amp; Nicholas Christopher LaRosa</p>
            <p>St. Patrick Catholic Church</p>
            <p>280 North Grant Avenue</p>
            <p>Begins promptly at 2:00pm</p>
            <p>December 15th, 2018</p>
            <p>Black Tie Optional</p>
          </div>
          <div className="reception-content">
            <div className="centered-header">Reception</div>
            <p>St. Andrew Catholic Church</p>
            <p>1899 McCoy Road</p>
            <p><i>Please enter at McCoy Road entrance. Signs will direct guests to the Parish Hall.</i></p>
            <p>6:00pm to 12:00am Midnight</p>
            <p>December 15th, 2018</p>
            <p>Black Tie Optional</p>
          </div>
          <div className="centered-content">
            <div className="centered-header">Directions</div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d48904.7499912706!2d-83.06020385384574!3d39.996230459243584!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x883888d35b70d02f%3A0x2c7bf9f201bed5!2sSt.+Patrick+Catholic+Church%2C+280+N+Grant+Ave%2C+Columbus%2C+OH+43215!3m2!1d39.9689884!2d-82.9917274!4m5!1s0x88388df2ab75635d%3A0x1a1c21f03a0c10dd!2sSt.+Andrew+Church%2C+1899+McCoy+Rd%2C+Upper+Arlington%2C+OH+43220!3m2!1d40.0393154!2d-83.0675104!5e0!3m2!1sen!2sus!4v1532004083201" width="600" height="450" frameborder="0" style={{border: 0}} allowfullscreen></iframe>
          </div>
        </div>
        </Scrollbars>
      </div>
    );
  }
}

export default DetailsPage;
