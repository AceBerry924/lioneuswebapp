const { responseHandler } = require('./../lib/responseHandler')
var jwt = require('jsonwebtoken');
var jwk = JSON.parse('{"keys":[{"alg":"RS256","e":"AQAB","kid":"NaX/jV+XNoDMIGeZccFjo8yDar3kxSszI7cddiOStBw=","kty":"RSA","n":"jhCQtHLMvkV91I99lQAeiDxUo5MX8yvc1zlL7libu1v9gqpIOyUA5SAPAfbfrY7Zh3NAcInyVnD2igOkinU6mh46ioJ-LxURMQtjYqOENRonxNc2lXvHs6MbS7am1MwqQDkVCss92erkAm1_tk90mXBrmT9-GXbGA8wl4wzsj--JnnCgZ_lX_VX8Qgmd41Inx3cIR0wsI2wYgtO6z8wMQ1J59jhaua1xbCltYznA4s7NqToqbCC-eADH3DLmouYjadSTyu7-cKuKw2paetr1qNYWHgPbYKddaJmaHqBWWVAtbhIuUBhO4LWpk8oXt3IZXg2n-4zNBHBJNc1xdACGYw","use":"sig"},{"alg":"RS256","e":"AQAB","kid":"a+/j5RzZSyFfbIVpFfI3NtRk24xcXYYcth/4KQ5uIag=","kty":"RSA","n":"ksYzLzrXWlZhy2jyVmi2AxOmcBAnxiRcAsZ0dHUH_DAMJHszA1dCCbeDuiIF9fWT4y_zNB0aKc7yVkGXVPR1zdNtB7quznm5O0PTmWg3fdr5oj27RAok5_XK_3nFqdhvKkX9oRHTqSSH_jn1rn3kOwzOFoaymuDI4HXKpjTbxmCDH9PhZE6CXNwk22RZ6SBsbL4OKyQMWGG93msQUVHaB_kVA7sVhUxY9ACZkKN2H2Q40v-LRSVEtDroidOzgzcBOhF3y4lyB3uQDFopU8onGJGb-fsYsdYsRyjBAmJEInOcZrpYtyuW043uIR9xzCIAQ43OaDh7D0kD5ryzqLui5Q","use":"sig"}]}')
var jwkToPem = require('jwk-to-pem');
var pem = jwkToPem(jwk.keys[1]);

const jwtAuthentication = (event) => {
    console.log("event", JSON.stringify(event.headers['accesstoken']))
    let { idToken } = event.queryStringParameters ? event.queryStringParameters : event;
    return jwt.verify(idToken, pem, { algorithms: ['RS256'] }, (err, decodedToken) => {
        return responseHandler(200, { err, decodedToken })
    });

}

module.exports = { jwtAuthentication }