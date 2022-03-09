import React from 'react';
import { Route, Link} from 'react-router-dom';
import { SecureRoute, LoginCallback } from '@okta/okta-react';

import LoginPage from './pages/Login';
import AdminDashboard from './pages/AdminDashboard';

const App = () => {
  return (
    <>
      <Link to="/">Home</Link>&nbsp;
      <Link to="/admin">Dashboard</Link>
      <Route exact path="/" component={LoginPage} />
      <SecureRoute exact path="/admin" component={AdminDashboard} />
      <Route path="/callback" component={LoginCallback} />
    </>
  )
}

export default App;