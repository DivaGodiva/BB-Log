import React from 'react';
import '../styles/index.css';
import { Provider } from "react-redux";
// import { BrowserRouter as Router, Route } from 'react-router-dom';
// import { Link } from 'react-router-dom'
import TestNumberContainer from '../containers/TESTNUMBERCONTAINER'

const App = ({store}) => (
  <Provider store = {store}>
    {/* <Router>
      <Link class="links" to="/test">&#10038;</Link> 
      <Route path="/test" component={TestNumberContainer} />
    </Router> */}
    <h1>WUOW</h1>
    <TestNumberContainer />
  </Provider>
)

export default App;
