import React from 'react';
import '../styles/index.css';
import '../styles/header.css';
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Link } from 'react-router-dom'
import Workblog from './Workblog';
import Lifeblog from './Lifeblog';
import Contact from './Contact';
import Footer from './Footer';
// import TestNumberContainer from '../containers/TESTNUMBERCONTAINER'

const App = ({store}) => (
  <Provider store = {store}>
    <Router>
      <div className="headercontainer">
        <div className="header">
          <div className="logocontainer">
            <img className="logo" src="/assets/profile-buns.jpg" alt="YAS" />
          </div>
          <div className="bblogcontainer">
            <span className="bblog">B: BLOG</span>
          </div>
          <div className="linkscontainer">
            <Link className="links" to="/">WORK</Link>
            <span> | </span>
            <Link className="links" to="/lifeblog">LIFE</Link>
            <span> | </span>
            <Link className="links" to="/contact">CONTACT</Link>
          </div>
        </div>
      </div>
      <Switch>
        <Route exact path="/" component={Workblog} />
        <Route path="/lifeblog" component={Lifeblog} />
        <Route path="/contact" component={Contact} />
      </Switch>
      <Route path="/" component={Footer} />
    </Router>
  </Provider>
)

export default App;
