import * as React from 'react';
import { Link } from 'react-router-dom';

type NavProps = {
  auth: Auth;
}

export class Nav extends React.Component<NavProps> {
  login = () => {
    this.props.auth.login();
  }

  logut = () => {
    this.props.auth.logout();
  }

  getLoginLogoutLink() {
    const { isAuthenticated } = this.props.auth;
    if (isAuthenticated()) {
      return (
        <li>
          <a onClick={this.logut}>
            Log out!
          </a>
        </li>
      )
    }
    return (
      <li>
        <a onClick={this.login} >
          Log in !
        </a>
      </li >
    )
  }


  render() {
    return (
      <ul>
        <li>
          <Link to="/">Main</Link>
        </li>
        {this.getLoginLogoutLink()}
      </ul>
    )
  }
}
