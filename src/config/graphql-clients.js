import AWSAppSyncClient from 'aws-appsync';
import Credentials from "./credentials";

const LioneusAppClient = new AWSAppSyncClient({ // this client is for awsAppsync graphql remains constant
    url: Credentials.lioneusAppSync.graphqlEndpoint,
    region: Credentials.lioneusAppSync.region,
    auth: {
        type: Credentials.lioneusAppSync.authenticationType,
        apiKey: Credentials.lioneusAppSync.apiKey,
    },
    disableOffline: true
});

export {
    LioneusAppClient,
}