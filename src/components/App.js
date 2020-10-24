import React from 'react';
import '../styles/index.css';
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
      <span> 8=D </span>
      <Link className="links" to="/"> Work-Blog  :</Link>
      <Link className="links" to="/lifeblog"> Life-Blog  :</Link>
      <Link className="links" to="/contact"> Contact</Link>
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
