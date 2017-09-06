import React, {Component} from 'react';
import Header from './comps/Header.jsx';
import Intro from './comps/Intro.jsx';

class App extends Component {
  render() {
    return (
      <div className="main">
        <Header headTxt="Welcome!" />
        <Intro/>
      </div>
    );
  }
}
export default App;
