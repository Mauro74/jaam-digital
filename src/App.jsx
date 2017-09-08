 import React from 'react';
import Header from './comps/Header.jsx';
import Intro from './comps/Intro.jsx';
import Curriculum from './comps/Curr.jsx';
import Contact from './comps/Contact.jsx';
// import Job from './comps/Job.jsx';
import copy from './copy';

class App extends React.Component {

render() {

    return (
      <div className="main">
        <Header headTxt={copy.header} tagline={copy.tagline}/>
        <Intro intro={copy.intro}/>
        <Curriculum />
        <Contact email={copy.email} phone={copy.phone}/>
      </div>
    );
  }
}

export default App;
