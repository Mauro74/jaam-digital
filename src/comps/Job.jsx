import React from 'react';


class Job extends React.Component {
  render() {

    const { details, index } = this.props;

    return(
      <li>
        <p>{details.title}</p>
        <p>{details.company}</p>
        <p>{details.from}</p>
        <p>{details.to}</p>
        <p>{details.desc}</p>
      </li>
    )
  }
}

export default Job;
