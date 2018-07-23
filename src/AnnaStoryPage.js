import React, { Component } from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import './css/StoryPage.css';

class AnnaStoryPage extends Component {
  constructor (props) {
    super(props)
    console.log("We are at Anna's page.")
  }

  render () {
    return (
      <Scrollbars renderThumbVertical={({ style, ...props }) =>
        <div {...props} style={{ ...style, backgroundColor: '#FFF', width: '4px', opacity: '0.5'}} />
      }>
        <div className='scrollable-content'>
          <p>Driving home from visiting my brother Carl in Michigan and squashed in the backseat of my dad’s car,
            I came to the life-changing realization that I was not called to be a Cloistered Carmelite nun like
            my favorite Saint, Saint Therese, but that God was calling me to marriage!! Of all places to discern
            my vocation! After years of discernment and numerous Come-and-See retreats, I became 99.9% sure that
            marriage was the path to Sainthood that God had planned for me. Mmm, now what? I adopted the philosophy
            that I needed to become the person that I wanted to marry, to do what I wanted my future spouse to do
            and to go the places where I wanted to meet my husband.</p>
          <p>A few months later, my mom told me that she had this Facebook friend named Art that ran a ministry
            called Saint Paul Street Evangelization, wherein evangelists walked the streets of Downtown Columbus,
            sharing their love and faith in Jesus Christ, passing out Rosaries and praying with the people that they
            meet.  She said she couldn’t make it, but asked if I wanted to go. It sounded interesting, and I was up
            for the new and slightly out-of-my-comfort-zone opportunity to evangelize. I drove the 10 minutes north
            of my downtown apartment to meet him, not knowing what to expect.</p> 
          <p>Art and I introduced ourselves and he explained that a few people were going to join us along the way.
            I remember at one point we talked with and gave Rosaries to a college couple sitting on the lawn of the
            Ohio State campus.  Walking away, Art looked at me and said, “You never know, they may pray the Rosary
            later tonight together.”  I responded that there was nothing else that I desired or wanted more in the
            world than a boyfriend, a fiance, a husband that would pray with me, lead me in prayer and to go to Mass
            and confession with me.  He told me that he would keep me in prayer and somehow mentioned that Nick, one
            of the people that we were going to meet up with, was a great Catholic man and “You never know...”.</p>
          <p>Well, I first saw Nick that day, July 9th, 2017, a beautiful sunny summer day. He was walking toward
            me on High Street (a busy area right south of OSU campus) in front of a McDonald’s.  My life would never
            be the same.  We talked briefly over a bite to eat and then hit the streets again. I remember very clearly
            all of us sitting with one homeless man on the sidewalk talking and sharing stories. As we listened, Nick
            kept looking across at me and smiling, and I could not help but smile back! I remember him praying with
            the people we met and thinking, “Wow, what beautiful heartfelt prayers!” I knew then he was different.</p>
          <p>Hours later, we finished evangelizing and closed our time holding hands in prayer (with Nick)! Art led
            our prayer, and he thanked God for all of the people we met, that they all would be kept safe under the
            protection of Mary, our Heavenly Mother, and be led to eternal life.  Then, to my embarrassment (and secret
            joy and excitement) he began to pray for me and my future spouse (as he promised) in front of Nick!! I
            couldn’t be happier!!  We all agreed that the next weekend we would meet again to evangelize. I couldn’t
            wait to see Nick again!</p>
          <p>That next weekend we again walked the streets of downtown Columbus, offering free Rosaries and prayers to
            all of the hungry people looking for hope.  Nick’s prayer, love and compassion for those we met was so
            beautiful and inspiring! I went back to my parents’ house that night and sat on the floor and told them all
            about the night.  I excitedly told my whole family all about Nick, and I said with confidence that, “He has
            the heart of the man I’m going to marry.  I don’t even know him yet, but I know his heart.” Wow.</p>
          <p>My life has been separated in two; the time before I met Nick and the time now with Nick forever. God has
            answered all of my prayers and fulfilled and surpassed all of my wildest dreams. I am so very excited to
            start my God-given call to the vocation of marriage to Nicholas LaRosa, who will be with me at my side as
            long as we both shall live, to grow old together, to raise God’s children together and to walk hand-in-hand
            on the way home to Heaven.</p>
        </div>
      </Scrollbars>
    );
  }
}

export default AnnaStoryPage;
