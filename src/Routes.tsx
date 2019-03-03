import * as React from 'react';
import { Route, RouteComponentProps } from 'react-router-dom';
import Auth from './Auth/Auth';
import { Home } from './Home';
import { App } from './App';

type RoutesProps = {
  auth: Auth;
}

export class Routes extends React.Component<RoutesProps> {
  handleAuthentication = (props: RouteComponentProps) => {
    if (/access_token|id_token|error/.test(props.location.hash)) {
      this.props.auth.handleAuthentication();
    }
  }
  render() {
    return (
      <>
        <Route path="/" render={(props: RouteComponentProps) => <App auth={this.props.auth} {...props} />} />
        <Route path="/callback" render={(props: RouteComponentProps) => {
          this.handleAuthentication(props);
          return <>Loading</>
        }} />
      </>
    )
  }
}
