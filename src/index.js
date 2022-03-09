import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { OktaAuth } from '@okta/okta-auth-js';
import { Security } from '@okta/okta-react';

import App from './App';

console.log(process.env)

const Issuer=process.env.REACT_APP_OKTA_ISSUER

const oktaConfig = {
  issuer: 'https://dev-81989351.okta.com/oauth2/default',
  redirect_uri: `${window.location.origin}/callback`,
  client_id: process.env.REACT_APP_OKTA_CLIENT_ID,
};

const oktaAuth = new OktaAuth(oktaConfig);


ReactDOM.render(
  <BrowserRouter>
    <Security oktaAuth={oktaAuth}>
      <App />
    </Security>
  </BrowserRouter>,
  document.getElementById('root'),
);

if (module.hot) module.hot.accept();

