import React, { Component } from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import './css/RegistryPage.css';

class RegistryPage extends Component {
  render () {

    return (
      <div className="registry-page-content">
        <Scrollbars renderThumbVertical={({ style, ...props }) =>
          <div {...props} style={{ ...style, backgroundColor: '#FFF', width: '4px', opacity: '0.5'}} />
        }>
        <div className="scrollable-content">
          <p>Above all, we value your prayers for our marriage and your presence at our wedding.</p>
          <p>With God's grace, we hope to start our family soon after beginning our married life together,
            so for those able to give, any gifts that contribute to the funding of our future Catholic
            home would be greatly appreciated and treasured.</p>
          <p>Feel free to bring any cards or gifts to the Reception at St. Andrew's Parish Hall.</p>
          <p>Thank you so much and may God bless you for your generosity. We are blessed to know each
            and every one of you!
          </p>
        </div>
        </Scrollbars>
      </div>
    );
  }
}

export default RegistryPage;
