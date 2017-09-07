import React, {Component} from 'react';
import Header from './comps/Header.jsx';
import Intro from './comps/Intro.jsx';
import Curriculum from './comps/Curr.jsx';
import Contact from './comps/Contact.jsx';

class App extends Component {
  render() {
    return (
      <div className="main">
        <Header headTxt="Welcome!" />
        <Intro/>
        <Curriculum/>
        <Contact/>
      </div>
    );
  }
}
export default App;
