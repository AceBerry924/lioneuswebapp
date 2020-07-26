const { createItemInDynamoDB, scan } = require("../lib/dynamodb");
const { responseHandler } = require('./../lib/responseHandler')
const { getTimestamp } = require('./../lib/helpers')
const uuid = require("uuid/v1");

const addProductReview = (event) => {
    // console.log("event", JSON.stringify(event))
    let body = event.body && event.body.userId ? event.body : JSON.parse(event.body)
    let { error } = validation(body)
    if (error) return responseHandler(500, { error });

    const { userId, productId, orderId, star, reviewTxt } = body
    const item = {
        id: uuid(),
        userId,
        productId,
        orderId,
        star,
        reviewTxt,
        createdTimestamp: getTimestamp(),
        statusId: 1
    }

    return reviewValidation(body)
        .then(_ => {
            return createItemInDynamoDB(
                item,
                'Review',
                { '#id': 'id' },
                'attribute_not_exists(#id)'
            )
        })
        .then(_ => {
            return responseHandler(200, item)
        })
        .catch((error) => {
            return responseHandler(500, error);
        })
}

const reviewValidation = ({ userId, productId, orderId }) => {
    return new Promise((resolve, reject) => {
        return scan({
            TableName: "Review",
            FilterExpression: "#userId = :userId AND #productId = :productId AND #orderId = :orderId",
            ExpressionAttributeNames: {
                "#userId": "userId",
                "#productId": "productId",
                "#orderId": "orderId",
            },
            ExpressionAttributeValues: {
                ":userId": userId,
                ":productId": productId,
                ":orderId": orderId,
            }
        })
            .then((data) => {
                if (data['Count']) {
                    reject({ message: "You already give review on this Order with the Product" })
                }
                else {
                    resolve()
                }
            })
            .catch((error) => {
                reject(error)
            })
    })
}

const validation = ({ userId, productId, orderId, star, reviewTxt }) => {

    if (!userId) return { error: "User Id is Required" }
    if (!productId) return { error: "Product id is Required" }
    if (!orderId) return { error: "Order id is Required" }
    if (!star) return { error: "Stars Count is Required" }
    if (parseFloat(star) <= 0 && parseFloat(star) >= 5) return { error: "Stars Count must be between 0 to 5" }
    if (!reviewTxt) return { error: "Review Text is Required" }

    return { error: false }
}

module.exports = { addProductReview }