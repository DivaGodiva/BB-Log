import React from 'react';
import '../styles/index.css';
import '../styles/header.css';
import '../styles/colorblock.css';
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from '../containers/Header_Container';
import Colorblock from '../containers/Colorblock_Container';
import Landing from './Landing';
import Workblog from './Workblog';
import Lifeblog from './Lifeblog';
import Contact from './Contact';
import Footer from './Footer';

const App = ({store}) => (
  <Provider store = {store}>
    <Router>
      <Header />
      <Colorblock />
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
