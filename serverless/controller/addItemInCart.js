const { createItemInDynamoDB } = require("../lib/dynamodb");
const { responseHandler } = require('./../lib/responseHandler')
const { getTimestamp } = require('./../lib/helpers')

const addItemInCart = (event) => {
    // console.log("event", JSON.stringify(event))
    let body = event.body && event.body.userId ? event.body : JSON.parse(event.body)
    let { error } = validation(body)
    if (error) return responseHandler(500, { error });

    const { userId, productId } = body
    const item = {
        userId,
        productId,
        createdTimestamp: getTimestamp(),
        statusId: 1
    }

    return createItemInDynamoDB(
        item,
        'UserCart',
        { '#productId': 'productId', '#userId': 'userId' },
        'attribute_not_exists(#productId) AND attribute_not_exists(#userId)'
    )
        .then(_ => {
            return responseHandler(200, item)
        })
        .catch((error) => {
            return responseHandler(500, error);
        })
}

const validation = (body) => {
    const { userId, productId } = body

    if (!userId) return { error: "User Id is Required" }
    if (!productId) return { error: "Product id is Required" }

    return { error: false }
}

module.exports = { addItemInCart }