module.exports.responseHandler = (statusCode, body) => {
    if (statusCode === 500) {
        const { message } = body
        body = message ? { error: message } : body
    }

    return {
        headers: {
            "Access-Control-Allow-Origin": "*", // Required for CORS support to work
            "Access-Control-Allow-Credentials": true // Required for cookies, authorization headers with HTTPS
        },
        statusCode,
        body: JSON.stringify(body)
    };
}