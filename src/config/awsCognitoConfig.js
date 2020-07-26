import Credentials from "./credentials";

const awsCognitoConfig = {
    region: Credentials.cognito.region,
    userPoolId: Credentials.cognito.userPoolId,
    userPoolWebClientId: Credentials.cognito.userPoolWebClientId,
}

export default awsCognitoConfig