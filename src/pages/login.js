/**
 * Created by tuyencaok on 10/15/2018.
 */
import React, {Component} from 'react';
import {Button, FormGroup, FormControl, ControlLabel} from 'react-bootstrap';
import { connect } from "react-redux";
import userActions from '../actions/user.actions';

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      submitted: false
    };
  }
  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }
  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }
  handleSubmit = event => {
    event.preventDefault();
    this.setState({ submitted: true });
    const { email, password } = this.state;
    const { dispatch } = this.props;
    if (email && password) {
      dispatch(userActions.login(email, password));
    }
  }
  render(){
  const { loggingIn } = this.props;
  const { email, password, submitted } = this.state;
    return (
      <div className="Login">
        <h2>Login page</h2>
        <form onSubmit={this.handleSubmit}>
          <FormGroup controlId="email" bsSize="large">
            <ControlLabel>Email</ControlLabel>
            <FormControl
              autoFocus
              type="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup controlId="password" bsSize="large">
            <ControlLabel>Password</ControlLabel>
            <FormControl
              value={this.state.password}
              onChange={this.handleChange}
              type="password"
            />
          </FormGroup>
          <Button
            block
            bsSize="large"
            disabled={!this.validateForm()}
            type="submit"
          >
            Login
          </Button>
        </form>
      </div>
    )
  }
}

function mapStateToProps(state) {
  //const { loggingIn } = state.authentication;
  const { loggingIn } = true;
  return {
    loggingIn
  };
}

const connectedLoginPage = connect(mapStateToProps)(LoginPage);
export { connectedLoginPage as LoginPage };