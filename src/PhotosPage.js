import React, { Component } from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import './css/PhotosPage.css';

class PhotosPage extends Component {
  render () {

    return (
      <div className="photo-page-content">
        <Scrollbars renderThumbVertical={({ style, ...props }) =>
          <div {...props} style={{ ...style, backgroundColor: '#FFF', width: '4px', opacity: '0.5'}} />
        }>
        <div className="scrollable-content">
          <p>After our engagement, Anna's sister, Sarah, who is currently serving as a midwife with
            her husband, Martin, in South Sudan, took a video of her Sudanese friends chanting "Anna-Nick".
            How beautiful is their joy and love! Enjoy!
          </p>
          <video controls src="./img/nananick.mp4">
            Sorry, your browser doesn't support embedded videos.
          </video>
        </div>
        </Scrollbars>
      </div>
    );
  }
}

export default PhotosPage;
