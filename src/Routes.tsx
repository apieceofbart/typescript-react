import * as React from 'react';
import { Route } from 'react-router-dom';

export class Routes extends React.Component {
  render() {
    return (
      <>
        <Route exact path="/" component={() => <>Home</>} />
        <Route path="/login" component={() => <>Login</>} />
      </>
    )
  }
}
