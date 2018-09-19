import * as React from 'react';
import { Link } from 'react-router-dom';

export class Nav extends React.Component {
  render() {
    return (
      <ul>
        <li>
          <Link to="/">Main</Link>
        </li>
        <li>
          <Link to="/home">Home</Link>
        </li>
      </ul>
    )
  }
}
