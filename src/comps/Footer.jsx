import React from 'react';

class Footer extends React.Component {
  render() {
    return(
      <div className="footer">
        <p>{this.props.copyright}</p>
      </div>
    )
  }
}

export default Footer;
