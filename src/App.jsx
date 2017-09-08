 import React from 'react';
import Header from './comps/Header.jsx';
import Intro from './comps/Intro.jsx';
import Curriculum from './comps/Curr.jsx';
import Contact from './comps/Contact.jsx';
import Footer from './comps/Footer.jsx';
import copy from './copy';

class App extends React.Component {

render() {

    return (
      <div className="main">
        <Header headTxt={copy.header} tagline={copy.tagline}/>
        <Intro intro={copy.intro}/>
        <Curriculum />
        <Contact email={copy.email} phone={copy.phone}/>
        <Footer copyright={copy.rights} />
      </div>
    );
  }
}

export default App;
