import React from 'react';
import '../styles/index.css';
import '../styles/header.css';
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Workblog from './Workblog';
import Lifeblog from './Lifeblog';
import Contact from './Contact';
import Footer from './Footer';
import Header from './Header';
import Landing from './Landing';
// import TestNumberContainer from '../containers/TESTNUMBERCONTAINER'

const App = ({store}) => (
  <Provider store = {store}>
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/workblog" component={Workblog} />
        <Route path="/lifeblog" component={Lifeblog} />
        <Route path="/contact" component={Contact} />
      </Switch>
      <Footer />
    </Router>
  </Provider>
)

export default App;
