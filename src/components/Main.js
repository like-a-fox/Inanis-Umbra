import React from 'react'
import Link from 'gatsby-link'

import pic01 from '../images/pic03.jpg'
import pic02 from '../images/pic06.jpg'
import pic03 from '../images/InanisUmbraIconBase.png'

class Main extends React.Component {
  render() {

    let close = <div className="close" onClick={() => {this.props.onCloseArticle()}}></div>

    return (
      <div id="main" style={this.props.timeout ? {display: 'flex'} : {display: 'none'}}>

        <article id="intro" className={`${this.props.article === 'intro' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">The Gist</h2>
          <span className="image main"><img src={pic01} alt="Duality" /></span>
          <p>In this maddening fall through the deteriorating psyche of Derek Musser, we find a world of tortue, vengence and freedom. The character is a stupid college student with an explosive tendency to overuse drugs. He is certainly what one can define as a burn out. This time he takes it too far and finds himself in the terrifying world of Inanis Umbra and is subjected to uncomprehensable amounts of torture.</p>
          <p>This gripping story somehow leaves the reader in nead of a nightligh while also laughing at the writer's overall sarcastic tone in regards to his own past. It is clear his view point of his past self is nothing but a joke and that definitely creates more than enough comic relief.</p>
          {close}
        </article>

        <article id="work" className={`${this.props.article === 'work' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major poem">THE NETHER</h2>
          <span className="image main"><img src={pic02} alt="" /></span>
  <div className="poem">        
<p>
I found a place of darkness. it was this & that was it.<br />
streets of blood & cobblestone; the lights were all unlit.
</p><p>
I can't tell you how to get there, I wouldn't if I could.<br />
even if I shared my mind; you would have never understood.
</p><p>
I could convey the sights of torture. & the feeling of it too.<br />
I tell myself it warped my soul, but that simply isn't true.
</p><p>
I can tell you about the soul, & how it decays but never dies.<br />
Even with words of noble truth, you would only hear more lies.
</p><p>
Skin, it's made to mask our soul. It cloaks our true designs.<br />
It stayed up here, when I went there, exposing all my crimes.
</p><p>
Many things corrupt our souls. Each one twists its features.<br />
Starting off so beautiful, only to end as vile creatures.
</p><p>
The only thing to blame, for my wretched, shameful state.<br />
Stares back from my reflection. Because I ensured my fate.
</p></div>
          {close}
        </article>

        <article id="about" className={`${this.props.article === 'about' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Teaser</h2>
          <span className="image main"><img src={pic03} alt="" /></span>
          <p>That's when I started to lose control. The knots in the wood ceiling beams began to twist its way toward me, forming into miniature tornados. I gasped as I felt the wind. Nothing so real had ever been procured from a drug induced hallucination. I still remember feeling them. Like they were drawing me towards them. Then as if to save me a lone bird ripped its way off the design on Alyssia's comforter and began flying towards me. It was beautiful. Its majestic feathers were colored with a blue that had never existed. It seemed so small, and yet with the beating of its wings it felt so strong. I felt saved, maybe even vindicated for some reason. Without warning the comforter decided to open its jowls. A disgusting red tongue flapped behind its jagged teeth as it snapped for the bird. Who knew a bed could have a mouth, let alone crave a bird that had flown from its very comforter? I winced as I heard the bones shatter. The bed had caught the bird. Blood sprayed over the room. I felt it. I mean I really did feel it. I could taste the iron as the red liquid washed my face. Tears flooded from my eyes, as I mourned something I deeply loved, despite having no understanding as to why. In that moment I had become lost.</p>
          {close}
        </article>

        <article id="contact" className={`${this.props.article === 'contact' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Contact</h2>
          <form method="post" action="#">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li><input type="submit" value="Send Message" className="special" /></li>
              <li><input type="reset" value="Reset" /></li>
            </ul>
          </form>
          <ul className="icons">
            <li><a href="#" className="icon fa-twitter"><span className="label">Twitter</span></a></li>
            <li><a href="#" className="icon fa-facebook"><span className="label">Facebook</span></a></li>
            <li><a href="#" className="icon fa-instagram"><span className="label">Instagram</span></a></li>
            <li><a href="#" className="icon fa-github"><span className="label">GitHub</span></a></li>
          </ul>
          {close}
        </article>

      </div>
    )
  }
}

Main.propTypes = {
  route: React.PropTypes.object,
  article: React.PropTypes.string,
  articleTimeout: React.PropTypes.bool,
  onCloseArticle: React.PropTypes.func,
  timeout: React.PropTypes.bool
}

export default Main