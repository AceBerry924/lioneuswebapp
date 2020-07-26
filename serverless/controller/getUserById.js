const { getItem } = require("../lib/dynamodb");
const { responseHandler } = require('./../lib/responseHandler')

const getUserById = (event, context, callback) => {
    // console.log("event", JSON.stringify(event))
    let { userId } = event.queryStringParameters ? event.queryStringParameters : event;

    if (!userId) return responseHandler(500, { error: "User Id is required to get User" });

    return getItem("User", { userId })
        .then((data) => {
            // console.log("data", JSON.stringify(data['Item']))
            return responseHandler(200, data['Item'])
        })
        .catch((error) => {
            return responseHandler(500, error);
        })
}

module.exports = { getUserById }