import React from 'react';
import '../styles/index.css';
import '../styles/header.css';
import '../styles/colorblock.css';
import '../styles/staticphoto.css';
import '../styles/landing.css';
import '../styles/footer.css';
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from '../containers/Header_Container';
// import Staticphoto from '../components/Staticphoto';
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
      {/* <Route exact path="/" component={Staticphoto}/> */}
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
