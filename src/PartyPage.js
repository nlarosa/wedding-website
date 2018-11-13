import React, { Component } from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import './css/PartyPage.css';

class PartyPage extends Component {
  render () {
    var bridalParty = [
      {
        name: "Laura Williams",
        description: "Sister of the Bride",
        biography: "She's awesome!",
        photoClass: "laura"
      },
      {
        name: "Jamie Towey",
        description: "Friend of the Groom",
        biography: "She's awesome!",
        photoClass: "jamie"
      },
      {
        name: "Sarah Williams",
        description: "Sister of the Bride",
        biography: "She's awesome!",
        photoClass: "sarah"
      },
      {
        name: "1stLt Sean Sweeney",
        description: "Friend of the Groom",
        biography: "She's awesome!",
        photoClass: "sean"
      },
      {
        name: "Katie Leis",
        description: "Sister of the Groom",
        biography: "She's awesome!",
        photoClass: "katie"
      },
      {
        name: "Justin Leis",
        description: "Brother-in-Law of the Groom",
        biography: "She's awesome!",
        photoClass: "justin"
      },
      {
        name: "Kayla Swetel",
        description: "Future Sister-in-Law of the Bride",
        biography: "She's awesome!",
        photoClass: "kayla"
      },
      {
        name: "Carl Williams",
        description: "Brother of the Bride",
        biography: "She's awesome!",
        photoClass: "carl"
      },
      {
        name: "Chloe LaRosa",
        description: "Sister of the Groom",
        biography: "She's awesome!",
        photoClass: "chloe"
      },
      {
        name: "Curt Williams",
        description: "Brother of the Bride",
        biography: "She's awesome!",
        photoClass: "curt"
      },
      {
        name: "Ellerie Patterson",
        description: "Friend of the Bride",
        biography: "She's awesome!",
        photoClass: "ellerie"
      },
      {
        name: "Orrin Belden",
        description: "Friend of the Groom",
        biography: "She's awesome!",
        photoClass: "orrin"
      },
      {
        name: "Marissa Everhart",
        description: "Friend of the Bride",
        biography: "She's awesome!",
        photoClass: "marissa"
      },
      {
        name: "Federico Segura",
        description: "Friend of the Groom",
        biography: "She's awesome!",
        photoClass: "federico"
      }
    ];

    return (
      <div className="party-page-content">
        <Scrollbars renderThumbVertical={({ style, ...props }) =>
          <div {...props} style={{ ...style, backgroundColor: '#FFF', width: '4px', opacity: '0.5'}} />
        }>
        <div className="scrollable-content">
          <div className="party-wrap">
            <div className="centered-header party-item">Bridesmaids</div>
            <div className="centered-header party-item">Groomsmen</div>
            {bridalParty.map((partyMember, i) => {
              return (
                <div className="party-item">
                  <hr />
                  <div className={`bridal-avatar ${partyMember.photoClass}`} />
                  <h3>{partyMember.name}</h3>
                  {i === 0 &&
                  <p><b>Maid of Honor</b></p>
                  }
                  {i === 1 &&
                  <p><b>Best Man</b></p>
                  }
                  <p>{partyMember.description}</p>
                </div>
              ) 
            })}
          </div>
        </div>
        </Scrollbars>
      </div>
    );
  }
}

export default PartyPage;
