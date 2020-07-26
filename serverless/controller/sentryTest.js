const { responseHandler } = require('./../lib/responseHandler')
const Sentry = require('@sentry/node');
Sentry.init({ dsn: 'https://0ff632ac3d6e4b328df7430139f5ea72@sentry.io/1865338' });

const sentryTest = (event) => {
    try {
        return await lambdaHandler(event);
    } catch (error) {
        console.log('error', JSON.stringify(error))
        Sentry.captureException(error);
        await Sentry.flush(2000);
        return error;
    }
}

module.exports = { sentryTest }