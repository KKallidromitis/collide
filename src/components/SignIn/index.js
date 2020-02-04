import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import { withFirebase } from '../Firebase/context';
import {Button} from 'react-bootstrap';
import * as ROUTES from '../../constants/routes';


const SignInPage = () => (
  <div>
    <h1>SignIn</h1>
    <SignInForm />
    <SignInGoogle />
    <SignInFacebook/>
  </div>
);

class SignInGoogleBase extends Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
  }
  onSubmit = event => {
    this.props.firebase
      .doSignInWithGoogle()
      .then(socialAuthUser => {
        // Create a user in your Firebase Realtime Database too
        return this.props.firebase
          .user(socialAuthUser.user.uid)
          .set({
            username: socialAuthUser.user.displayName,
            email: socialAuthUser.user.email,
            roles: {},
          });
      })
      .then(() => {
        this.setState({ error: null });
        this.props.history.push(ROUTES.LANDING);
      })
      .catch(error => {
        this.setState({ error });
      });
    event.preventDefault();
  };
  render() {
    const { error } = this.state;
    return (
      <form onSubmit={this.onSubmit}>
        <button type="submit">Sign In with Google</button>
        {error && <p>{error.message}</p>}
      </form>
    );
  }
}

class SignInFacebookBase extends Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
  }
  onSubmit = event => {
    this.props.firebase
      .doSignInWithFacebook()
      .then(socialAuthUser => {
        this.setState({ error: null });
        this.props.history.push(ROUTES.ACCOUNT);
        // Create a user in your Firebase Realtime Database too
        return this.props.firebase
          .user(socialAuthUser.user.uid)
          .set({
            username: socialAuthUser.additionalUserInfo.profile.name,
            email: socialAuthUser.additionalUserInfo.profile.email,
            roles: {},
          });
      })
      .catch(error => {
        this.setState({ error });
      });
    event.preventDefault();
  };
  render() {  
    //const { error } = this.state;
    return (
      <form className="btn_form" onSubmit={this.onSubmit}>
        <Button type="submit" variant="primary" size="lg" className='btn_fb'>Connect with Facebook</Button>
        
      </form>
    );
  }
}
//{error && <p>{error.message}</p>}
const SignInForm = compose(
  withRouter,
  withFirebase,
)(SignInGoogleBase);
const SignInGoogle = compose(
  withRouter,
  withFirebase,
)(SignInGoogleBase);
const SignInFacebook = compose(
  withRouter,
  withFirebase,
)(SignInFacebookBase);
export default SignInPage;
export { SignInForm, SignInGoogle,SignInFacebook};