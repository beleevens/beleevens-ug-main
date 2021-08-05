import React from 'react'

class Imprint extends React.Component {
  render() {
    return (
      <div
        ref={this.props.setWrapperRef}
        id="imprint"
      >
        <h1>Site Notice</h1>
          <h2>Information pursuant to Sect. 5 German Telemedia Act (TMG)</h2>
          <p>beleevens UG (haftungsbeschränkt)<br />
          Fritz-Erler-Straße 20b<br />
          81737 München</p>

          <p>Commercial Register: HRB 267664<br />
          Registration court: München</p>

          <p><strong>Represented by:</strong><br />
          Dominik Bleilevens</p>

          <h2>Contact</h2>
          <p>Phone: +4917632211706<br />
          E-mail: hi@beleevens.com</p>

          <h2>EU dispute resolution</h2>
          <p>The European Commission provides a platform for online dispute resolution (ODR): <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer">https://ec.europa.eu/consumers/odr/</a>.<br /> Our e-mail address can be found above in the site notice.</p>

          <h2>Dispute resolution proceedings in front of a consumer arbitration board</h2>
          <p>We are not willing or obliged to participate in dispute resolution proceedings in front of a consumer arbitration board.</p>
      </div>
    )
  }
}

export default Imprint
