import React from 'react';
import Job from './Job.jsx';
import jobsData from '../jobs.js';

class Curr extends React.Component {

  constructor() {
    super();

    this.state = {
      jobs: {}
    }
  }

  componentDidMount() {
    this.setState({
      jobs: jobsData
    });
  }

  render() {
      return (
        <ul className="list-container">
          {
            Object
            .keys(this.state.jobs)
            .map(key => <Job key={key} index={key} details={this.state.jobs[key]} />)
          }
        </ul>
      )
  }
}

export default Curr;
