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
    <img src="/assets/profile-buns.jpg" className="logo" alt="YAS" />
      <Link className="header links" to="/"> Work-Blog  :</Link>
      <Link className="header links" to="/lifeblog"> Life-Blog  :</Link>
      <Link className="header links" to="/contact"> Contact</Link>
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
