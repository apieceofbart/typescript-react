import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

type AppProps = {
  greetings?: string;
}

class App extends React.Component<AppProps> {
  static defaultProps = {
    greetings: 'Hello there!'
  }
  render() {
    return (
      <>
        <Typography variant="display4">{this.props.greetings}</Typography>
        <Button variant="contained" color="primary">
          I do nothing
      </Button>
      </>
    )
  }
}

ReactDOM.render(<App greetings="Hello Typescript and React!" />, document.getElementById('root'))
