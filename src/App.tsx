import * as React from "react";

type AppProps = {
  greetings?: string;
}

export class App extends React.Component<AppProps> {
  static defaultProps = {
    greetings: 'Hello there!'
  }
  render() {
    return (
      <h1>{this.props.greetings}</h1>
    )
  }
}
