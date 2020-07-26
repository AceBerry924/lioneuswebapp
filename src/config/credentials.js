const Credentials = {
    cognito: {
        region: 'us-east-1',
        userPoolId: process.env.REACT_APP_USER_POOL_ID,
        userPoolWebClientId: process.env.REACT_APP_USER_POOL_WEB_CLIENT_ID,
    },

    lioneusAppSync: {
        graphqlEndpoint: "https://36a5dhvo2nfgzkf6pgyhtajgdq.appsync-api.us-east-1.amazonaws.com/graphql",
        region: "us-east-1",
        authenticationType: "API_KEY",
        apiKey: process.env.REACT_APP_LIONEUS_APPSYNC,
    }
}

module.exports = Credentials;