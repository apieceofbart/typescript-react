import * as React from 'react';
import Auth from './Auth/Auth';

import { RouteComponentProps } from 'react-router-dom';
type AppProps = {
  auth: Auth;
} & RouteComponentProps;

export class App extends React.Component<AppProps> {
  goTo(route: string) {
    this.props.history.replace(`/${route}`)
  }

  login = () => {
    this.props.auth.login();
  }

  logout = () => {
    this.props.auth.logout();
  }

  render() {
    const { isAuthenticated } = this.props.auth;

    return (
      <div>
        <button
          onClick={() => this.goTo('home')}
        >
          Home
            </button>
        {
          !isAuthenticated() && (
            <button
              onClick={this.login}
            >
              Log In
            </button>
          )
        }
        {
          isAuthenticated() && (
            <button
              onClick={this.logout}
            >
              Log Out
            </button>
          )
        }
      </div >
    );
  }
}

