import React, { Component } from 'react';
import { Route, Router } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';

import Layout from './components/LayoutComponent';
import HomeComponent from './components/HomeComponent';
import AboutComponent from './components/AboutComponent';
import VideoComponent from './components/VideoComponent';
import StillsComponent from './components/StillsComponent';

import './index.css';

const customHistory = createBrowserHistory();

class App extends Component {
  render() {
    return (
      <Router history={customHistory}>
        <Layout>
          <Route exact path="/about" component={AboutComponent} />
          <Route exact path="/video" component={VideoComponent} />
          <Route exact path="/" component={HomeComponent} />
        </Layout>
      </Router>
    );
  }
}

export default App;
