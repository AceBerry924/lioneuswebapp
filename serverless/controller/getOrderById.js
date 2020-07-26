const { getItem } = require("../lib/dynamodb");
const { responseHandler } = require('./../lib/responseHandler')

const getOrderById = (event) => {
    // console.log("event", JSON.stringify(event))
    let { orderId } = event.queryStringParameters ? event.queryStringParameters : event;

    if (!orderId) return responseHandler(500, { error: "Order Id is required to get Order" });

    return getItem("Order", { id: orderId })
        .then((data) => {
            // console.log("data", JSON.stringify(data['Item']))
            return responseHandler(200, data['Item'])
        })
        .catch((error) => {
            return responseHandler(500, error);
        })
}

module.exports = { getOrderById }