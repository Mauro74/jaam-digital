import React from 'react';

class Intro extends React.Component {
  render() {
    return (
      <div className="intro">
        <h2>{this.props.intro}</h2>
      </div>
    )
  }
}

export default Intro;
