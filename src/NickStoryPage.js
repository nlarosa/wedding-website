import React, { Component } from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import './css/StoryPage.css';

class NickStoryPage extends Component {
  render () {
    return (
      <Scrollbars renderThumbVertical={({ style, ...props }) =>
        <div {...props} style={{ ...style, backgroundColor: '#FFF', width: '4px', opacity: '0.5'}} />
      }>
        <div className='scrollable-content'>
          <p><b>Anna:</b> “Hi. My name is Anna.”</p>

          <p><b>Nick:</b> “Hi. My name is Nick. Wanna evangelize?”</p>

          <p><b>Art:</b> “Lord God, please help Anna find a husband.”</p>

          <p><b>Nick <i>(to God)</i>:</b> “Hey God, Anna is so very wonderful, faithful and loving. What should I do?”</p>

          <p><b>God <i>(to Nick)</i>:</b> “Marry her, you fool!”</p>

          <p><b>Nick <i>(to God)</i>:</b> “Aye, aye, God!”</p>

          <p><b><i>*10 wonderful and blessed months later, Nick prepares to propose to Anna*</i></b></p>

          <p><b>Nick <i>(in his mind)</i>:</b> “Anna Frances Williams, Thou art the most wond'rful woman I has't ev'r hath met. Thy loveth rains ov'r all thee meeteth, liketh the rays of m'rcy yond poureth f'rth from the heart of Christ. For thy loveth is bett'r than wine, thy anointing oils art fragrant, thy nameth is p'rfume did pour out. Ariseth, mine own loveth, mine own fair one, and cometh hence; for lo, the wint'r is past, the raineth is ov'r and gone. Alloweth us beest did marry in the most Holy Sacrament of Matrimony!”</p>

          <p><b>Nick <i>(in actuality)</i>:</b> “Uh…. uh… uhmmm… will you marry me, Anna?”</p>

          <p><b>Anna:</b> “Kiss me, you fool!”</p>
        </div>
      </Scrollbars>
    );
  }
}

export default NickStoryPage;
