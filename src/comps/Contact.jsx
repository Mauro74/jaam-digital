import React from 'react';

class Contact extends React.Component {

  render () {

    const emailLink = `mailto:${this.props.email}`;
    const phoneLink = `tel:+44${this.props.phone}`;
    return (
      <div className="contact">
        <h2>Contact me</h2>
        <p><b>email:</b> <a href={emailLink}>{this.props.email}</a></p>
        <p><b>tel:</b> <a href={phoneLink}>+44 {this.props.phone}</a></p>
      </div>
    )
  }
}

export default Contact;
