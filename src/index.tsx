import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Routes } from './Routes';
import { Nav } from './Nav';
type AppProps = {
  greetings?: string;
}

class App extends React.Component<AppProps> {
  static defaultProps = {
    greetings: 'Hello there!'
  }
  render() {
    return (
      <Router>
        <div>
          <Nav />
          <h1>{this.props.greetings}</h1>
          <Routes />
        </div>
      </Router>
    )
  }
}

ReactDOM.render(<App greetings="Hello Typescript and React!" />, document.getElementById('root'))
