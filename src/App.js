import React, { Component } from 'react';
import {Route, Switch, BrowserRouter} from 'react-router-dom';
import GitHub from "./components/github";
import NotFound from "./components/NotFound";


class App extends Component {
  render() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={GitHub} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
  }
}

export default App;
