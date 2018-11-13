import React, { Component } from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import { OpenLink } from './utils';
import './css/DetailsPage.css';

class DetailsPage extends Component {
  render () {

    return (
      <div className="details-page-content">
        <Scrollbars renderThumbVertical={({ style, ...props }) =>
          <div {...props} style={{ ...style, backgroundColor: '#FFF', width: '4px', opacity: '0.5'}} />
        }>
        <div className="scrollable-content">
          <div className="details-column left">
            <div className="ceremony-content" onClick={() => OpenLink('https://goo.gl/maps/mSDZ32e7min')}>
              <div className="centered-header">Nuptial Mass</div>
              <div className="details-church-photo st-patricks" />
              <div className="right-text-content">
                <p>The Nuptial Mass uniting</p>
                <p>Anna &amp; Nicholas</p>
                <p>St. Patrick Catholic Church</p>
                <p>280 North Grant Avenue</p>
                <p>Begins promptly at 2:00pm</p>
                <p>December 15th, 2018</p>
                <p>Cocktail Attire</p>
              </div>
            </div>
            <div className="reception-content" onClick={() => OpenLink('https://goo.gl/maps/fJD92C6vGVr')}>
              <div className="centered-header">Reception</div>
              <div className="details-church-photo st-andrews" />
              <div className="right-text-content">
                <p>St. Andrew Catholic Church</p>
                <p>1899 McCoy Road</p>
                <p><i>Please enter at McCoy Road entrance</i></p>
                <p>6:00pm to 12:00am Midnight</p>
                <p>December 15th, 2018</p>
                <p>Cocktail Attire</p>
              </div>
            </div>
          </div>
          <div className="details-column right">
            <div className="things-to-do-content">
              <div className="centered-header">Things to do in Columbus!</div>
              <div className="thing-to-do" onClick={() => OpenLink('http://www.sciotomile.com/')}>
                <p>The Scioto Mile: <i>Where Nick proposed to Anna!</i></p>
                <p>Click here visit their website!</p>
              </div>
              <div className="thing-to-do" onClick={() => OpenLink('https://jubileemuseum.org/')}>
                <p>Jubilee Museum: <i>A wonderful Catholic Art Museum!</i></p>
                <p>Click here visit their website!</p>
              </div>
              <div className="thing-to-do" onClick={() => OpenLink('https://www.nationalvmm.org/')}>
                <p>National Veteran's Memorial and Museum</p>
                <p>Click here visit their website!</p>
              </div>
              <div className="thing-to-do" onClick={() => OpenLink('http://shortnorth.org/')}>
                <p>Short North: <i>A great place to grab a bit to eat!</i></p>
                <p>Click here visit their website!</p>
              </div>
              <div className="thing-to-do last" onClick={() => OpenLink('http://www.topiarypark.org/')}>
                <p>The Topiary Park: <i>"A landscape of a painting of a landscape"</i></p>
                <p>Click here visit their website!</p>
              </div>

            </div>
            <div className="accomodations-content">
              <div className="centered-header">Accomodations</div>
              <div className="accomodation-content hampton" onClick={() => OpenLink('http://group.hamptoninn.com/WilliamsLaRosaWedding')}>
                <p>Hampton Inn &amp; Suites - Columbus/University Area</p>
                <p>Click here to book online!</p>
              </div>
              <div className="accomodation-content hyatt" onClick={() => OpenLink('https://columbusdublin.place.hyatt.com/en/hotel/home.html?corp_id=g-WILA')}>
                <p>Hyatt Place - Columbus/Dublin</p>
                <p>Click here to book online!</p>
              </div>
              <div className="accomodation-content marriott" onClick={() => OpenLink('https://www.marriott.com/meeting-event-hotels/group-corporate-travel/groupCorp.mi?resLinkData=WILLIAMS/%20LAROSA%20WEDDING%20%5ECMHCN%60WLWWLWA%7CWLWWLWB%60129.00%60USD%60false%604%6012/14/18%6012/16/18%6011/15/18&app=resvlink&stop_mobi=yes')}>
                <p>Marriott - Columbus University Area</p>
                <p>Click here to book online!</p>
              </div>
            </div>
          </div>
        </div>
        </Scrollbars>
      </div>
    );
  }
}

export default DetailsPage;
