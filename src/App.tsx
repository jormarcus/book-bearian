import React from 'react';
import './styles/App.scss';
import { Router, Route, Switch } from 'react-router-dom';
import createBrowserHistory from './history';
import { BookPage, Header, LandingPage } from './components/common';
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
            <Route path="/book/:bookId" exact component={BookPage} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
