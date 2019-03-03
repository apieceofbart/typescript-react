import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import { Routes } from './Routes';
import { Nav } from './Nav';
import history from './history';
import Auth from './Auth/Auth';

export const auth = new Auth();

type AppProps = {
  greetings?: string;
}


class App extends React.Component<AppProps> {
  static defaultProps = {
    greetings: 'Hello there!'
  }
  render() {
    return (
      <Router history={history}>
        <div>
          <Nav auth={auth} />
          <h1>{this.props.greetings}</h1>
          <Routes auth={auth} />
        </div>
      </Router>
    )
  }
}

ReactDOM.render(<App greetings="Hello Typescript and React!" />, document.getElementById('root'))
