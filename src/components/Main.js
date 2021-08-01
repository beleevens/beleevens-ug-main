import PropTypes from 'prop-types'
import React from 'react'

class Main extends React.Component {
  render() {
    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
      </div>
    )
  }
}

export default Main
