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
        <h1>Creativity * Technology</h1>
        <p>
          Innovation happens when a creative mind meets deep technological understanding.
          </p>
          <p style={{"width":"90%", "paddingLeft": "10%"}}>
          I will help you to connect the dots between human needs, technology and business opportunities.
        </p>
      </div>
    </div>
    <nav>
      <ul>
        <li>
          <a href="mailto:hi@beleevens.com">
          <button>
            Reach out
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
