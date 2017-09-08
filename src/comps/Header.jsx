import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <h2>{this.props.headTxt}</h2>
        <div className="header__avatar"></div>
        <p>{this.props.tagline}</p>
      </div>
    )
  }
}

export default Header;
