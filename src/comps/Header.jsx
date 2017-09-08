import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <h1 className="header__hero">{this.props.headTxt}</h1>
        <div className="header__avatar"></div>
        <p className="header__tagline"><b>{this.props.tagline}</b></p>
      </div>
    )
  }
}

export default Header;
