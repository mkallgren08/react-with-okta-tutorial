import React from 'react';
import { withOktaAuth } from '@okta/okta-react';

class LoginPage extends React.Component {

  async componentDidMount() {
    const authenticated = await this.props.auth.isAuthenticated();
    console.log(this.props.auth)
    if (authenticated !== false) {
      console.log('User is authenticated??')
      const user = await this.props.auth.getUser();
      console.log(user)
    } else {
      console.log('User is not authentica')
    }
  }

  render() {
    return (
      <>
        <h1>Login page</h1>
        <button onClick={() => this.props.auth.login()}>sign in</button>
      </>
    )
  }
}

export default withOktaAuth(LoginPage);