import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import auth0Client from './Auth';
import CircularProgress from '@material-ui/core/CircularProgress';

class Callback extends Component {
  async componentDidMount() {
    await auth0Client.handleAuthentication();
    this.props.history.replace('/');
  }

  render() {
    return (
      <p><CircularProgress size={80}/></p>
    );
  }
}

export default withRouter(Callback);