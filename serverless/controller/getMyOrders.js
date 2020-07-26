const { getItemByIndex } = require("../lib/dynamodb");
const { responseHandler } = require('./../lib/responseHandler')

const getMyOrders = (event) => {
    // console.log("event", JSON.stringify(event))
    let { userId } = event.queryStringParameters ? event.queryStringParameters : event;

    if (!userId) return responseHandler(500, { error: "User ID is required to get Orders" });

    return getItemByIndex("Order", "userId-index", "#userId = :userId", { "#userId": "userId" }, { ":userId": userId })
        .then((data) => {
            return responseHandler(200, data['Items'])
        })
        .catch((error) => {
            return responseHandler(500, error);
        })
}

module.exports = { getMyOrders }