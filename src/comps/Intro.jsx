import React from 'react';

class Intro extends React.Component {
  render() {
    return (
      <div className="intro">
        <p>{this.props.intro}</p>
      </div>
    )
  }
}

export default Intro;
