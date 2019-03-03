import * as React from 'react';
import Auth from './Auth/Auth';

import { RouteComponentProps } from 'react-router-dom';
type AppProps = {
  auth: Auth;
} & RouteComponentProps;

export class App extends React.Component<AppProps> {
  render() {
    return (
      <div>
        Main content goes here
      </div>
    );
  }
}

