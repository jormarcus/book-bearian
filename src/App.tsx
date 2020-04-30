import React from 'react';
import './App.scss';
import { Router, Route, Switch } from 'react-router-dom';
import createBrowserHistory from './history';
import { Header, LandingPage } from './components/common';
import { Shelf } from './components/shelves';

function App() {
  return (
    <div>
      <Router history={createBrowserHistory}>
        <div>
          <Header />
          <Switch>
            <Route path="/" exact component={LandingPage} />
            <Route path="/shelf" exact component={Shelf} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
