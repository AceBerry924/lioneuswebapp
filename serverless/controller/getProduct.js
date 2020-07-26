const { getItem } = require("../lib/dynamodb");
const { responseHandler } = require('./../lib/responseHandler')

const getProduct = (event) => {
    // console.log("event", JSON.stringify(event))
    let { productId } = event.queryStringParameters ? event.queryStringParameters : event;

    if (!productId) return responseHandler(500, { error: "Product Id is required to get Product" });

    return getItem("Product", { productId })
        .then((data) => {
            // console.log("data", JSON.stringify(data['Item']))
            if (data['Item'].statusId === 1) {
                return responseHandler(200, data['Item'])
            }
            else if(data['Item'].statusId === 0) {
                return responseHandler(500, { message: "Product has been Deleted." });
            }
        })
        .catch((error) => {
            return responseHandler(500, error);
        })
}

module.exports = { getProduct }