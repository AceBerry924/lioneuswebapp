import React from 'react';
import ReactDOM from 'react-dom';
import './App/index.css';
// import * as Sentry from '@sentry/browser';
import { ApolloProvider } from "react-apollo"
import { NotificationContainer } from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import { Provider } from 'react-redux'; // redux
import store from './store/store'
import { LioneusAppClient } from './config/graphql-clients'; // App Sync Default Client
import Amplify from 'aws-amplify'; // AWS Amplify configuration
import awsCognitoConfig from './config/awsCognitoConfig'
import App from './App/App';
import 'react-flags-select/css/react-flags-select.css';

// Sentry.init({ dsn: "https://e27875cdaf77499195459120f94ffda6@sentry.io/1865337" }); // sentry
Amplify.configure(awsCognitoConfig)
ReactDOM.render(<Provider store={store}>
  <ApolloProvider client={LioneusAppClient}>
    <App />
    <NotificationContainer />
  </ApolloProvider>
</Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA