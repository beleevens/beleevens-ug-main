import PropTypes from 'prop-types'
import React from 'react'
// import pic01 from '../images/pic01.jpg'
// import pic02 from '../images/pic02.jpg'
// import pic03 from '../images/pic03.jpg'

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="why"
          className={`${this.props.article === 'why' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Why</h2>
          {/* <span className="image main">
            <img src={pic01} alt="" />
          </span> */}
          <p>
            We have everything and do so little. There are endless opportunities out there to
            make the world a better place. But still.. many of us spend our time just getting through life.
            I want to change this. I want to live life to the fullest, learn as much as I can and help.
            Help people, help nature, help society.
          </p>
          <p>
            I strongly believe that we should live sustainably in an ecological, 
            economical and social manner. Nevertheless technology enables us now to do things, 
            nobody has had imagined not very long ago. We need to understand it, use it to our best
            knowledge and be aware of the risks and consequences that come with it.
          </p>
          {close}
        </article>

        <article
          id="how"
          className={`${this.props.article === 'how' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">How</h2>
          {/* <span className="image main">
            <img src={pic02} alt="" />
          </span> */}
          <p>
            We need to rethink how we do business and how we live as a society. Every day I bridge 
            the gap between caring for nature and at the same time making the best use of the available technology.
            I put the human in the center, think about the challenges we need to tackle and find the right technology 
            to solve them.
          </p>
          <p>
            When you hire me, we will take a look at your current challenges and decide how I can help you the best.
            If it's something I can help you with, you can directly hire me. If I think someone from my network of highly 
            skilled experts is better suited to help you out I'll connect you with them.
          </p>
          {close}
        </article>

        <article
          id="what"
          className={`${this.props.article === 'what' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">What</h2>
          {/* <span className="image main">
            <img src={pic03} alt="" />
          </span> */}
          <p>
            I have worked in all kinds of industries and my skill set is as diverse as it can get. My greatest skill is 
            at the intersection of UX Design and technology. I can consult in both areas but also be really hands on, create 
            wireframes and information architecutres or if necessary even code an application.
          </p>
          <p>
            Throughout the last years I specialized in different areas. I started at website concepts and create these for several years.
            After that I made deep dive into conversational design like chatbots and voice interfaces and was hired to work on a German smart speaker project.
            The most recent adventure has been into all things Blockchain. Most interesting to me in that area are NFTs (Non Fungible Tokens), 
            which will be the next big tech revolution. <a href="mailto:hi@beleevens.com">Ask me about it!</a>
          </p>
          {close}
        </article>

        <article
          id="who"
          className={`${this.props.article === 'who' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Who</h2>
          {/* <span className="image main">
            <img src={pic03} alt="" />
          </span> */}
          <p>
            
          </p>
          
          {close}
        </article>

        <article
          id="Contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
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
              <li>
                <input type="submit" value="Send Message" className="special" />
              </li>
              <li>
                <input type="reset" value="Reset" />
              </li>
            </ul>
          </form>
          <ul className="icons">
            <li>
              <a
                href="https://twitter.com/HuntaroSan"
                className="icon fa-twitter"
              >
                <span className="label">Twitter</span>
              </a>
            </li>
            <li>
              <a href="https://codebushi.com" className="icon fa-facebook">
                <span className="label">Facebook</span>
              </a>
            </li>
            <li>
              <a href="https://codebushi.com" className="icon fa-instagram">
                <span className="label">Instagram</span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/codebushi/gatsby-starter-dimension"
                className="icon fa-github"
              >
                <span className="label">GitHub</span>
              </a>
            </li>
          </ul>
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
