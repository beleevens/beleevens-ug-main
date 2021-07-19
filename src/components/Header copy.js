import PropTypes from 'prop-types'
import React from 'react'

const Header = props => (
  <header id="header" style={props.timeout ? { display: 'none' } : {}}>
    <div className="logo">
      <span className="icon fa-globe"></span>
    </div>
    <div className="content">
      <div className="inner">
        <h1>The Future Is Up To Us</h1>
        <p>
          I believe it's up to us to change the world.
          </p>
          <p style={{"width":"90%", "paddingLeft": "10%"}}>
          When you hire us we will connect the dots between human needs, technology and business opportunities.
        </p>
      </div>
    </div>
    <nav>
      <ul>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('why')
            }}
          >
            Why
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('how')
            }}
          >
            How
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('what')
            }}
          >
            What
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('who')
            }}
          >
            Who
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle('contact')
            }}
          >
            Contact
          </button>
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
