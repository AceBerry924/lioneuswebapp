const { createItemInDynamoDB } = require("../lib/dynamodb");
const { responseHandler } = require('./../lib/responseHandler')
const { getTimestamp } = require('./../lib/helpers')

const onRemoveCartOrWishlistItem = (event) => {
    // console.log("event", JSON.stringify(event))
    if (event.Records[0]['eventName'] !== 'REMOVE') return responseHandler(200, event);

    const { eventID, dynamodb: { OldImage: { productId, createdTimestamp, userId } } } = event.Records[0]
    const item = {
        id: eventID,
        userId: userId['S'],
        productId: productId['S'],
        createdTimestamp: createdTimestamp['N'],
        removedItemTimestamp: `${getTimestamp()}`,
    }
    // console.log("item", JSON.stringify(item))
    return createItemInDynamoDB(
        item,
        'RemovedWishListAndCart',
        { '#id': 'id', '#removedItemTimestamp': 'removedItemTimestamp' },
        'attribute_not_exists(#id) AND attribute_not_exists(#removedItemTimestamp)'
    )
        .then(_ => {
            // console.log("added")
            return responseHandler(200, event)
        })
        .catch((error) => {
            console.log("error", JSON.stringify(error))
            return responseHandler(500, event);
        })
}

module.exports = { onRemoveCartOrWishlistItem }