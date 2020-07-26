const { getItemByQuery } = require("../lib/dynamodb");
const { responseHandler } = require('./../lib/responseHandler')

const getUserWishList = (event) => {
    // console.log("event", JSON.stringify(event))
    let { userId } = event.queryStringParameters ? event.queryStringParameters : event;

    if (!userId) return responseHandler(500, { error: "User Id is required to get Wish List" });

    return getItemByQuery(
        "WishList",
        "#userId = :userId",
        { "#userId": "userId" },
        { ":userId": userId }
    )
        .then((data) => {
            return responseHandler(200, data['Items'])
        })
        .catch((error) => {
            return responseHandler(500, error);
        })
}

module.exports = { getUserWishList }