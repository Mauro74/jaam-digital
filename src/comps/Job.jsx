import React from 'react';


class Job extends React.Component {
  render() {

    const { details, index } = this.props;

    return(
      <li>
        <h3>{details.company}</h3>
        <p>{details.title}</p>
        <p>from {details.from} to {details.to}</p>
        <p>{details.desc}</p>
      </li>
    )
  }
}

export default Job;
