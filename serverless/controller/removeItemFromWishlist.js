const { deleteItem } = require("../lib/dynamodb");
const { responseHandler } = require('./../lib/responseHandler')

const removeItemFromWishlist = event => {
    let { productId, userId } = event.queryStringParameters ? event.queryStringParameters : event;

    return deleteItem("WishList", { 'userId': userId, 'productId': productId })
        .then((data) => {
            console.log("data", JSON.stringify(data))

            if (data["Attributes"]) {
                return responseHandler(200, data["Attributes"])
            }
            else {
                return responseHandler(500, { message: "Item Not Found." });
            }
        })
        .catch((error) => {
            console.log("error", JSON.stringify(error))
            return responseHandler(500, error);
        })
}

module.exports = { removeItemFromWishlist }