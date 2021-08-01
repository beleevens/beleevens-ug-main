import PropTypes from 'prop-types'
import React from 'react'
import logo from '../images/logo_beleevens.png'
import logo_text from '../images/logo_text.png'

const Header = props => (
  <header id="header" style={props.timeout ? { display: 'none' } : {}}>
    <div className="logo">
        <img src={logo} alt=""/>
    </div>
    <div className="content">
      <div className="inner">
        <img src={logo_text} alt="" class="logo_text"/>
        <h1>
          A creative mind meets deep technological understanding.
        </h1> 
        <div style={{"width":"90%", "paddingLeft": "10%"}}>
          I’m a multidisciplinary creative technologist with a focus on <strong>digital brand experiences.</strong><br/>
          Working at the intersection of product design, brand interactions and technology innovations. <br/>
          Currently building things around <strong>NFTs & DAOs</strong>.
        </div>
      </div>
    </div>
    <nav>
      <ul>
        <li>
          <a href="mailto:hi@beleevens.com">
          <button>
            Want to build something? Drop me a line!
          </button>
          </a>
        </li>
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
}

export default Header
