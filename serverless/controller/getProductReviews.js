const { getItemByIndex } = require("../lib/dynamodb");
const { responseHandler } = require('./../lib/responseHandler')

const getProductReviews = (event) => {
    // console.log("event", JSON.stringify(event))
    let { id, getReviewBy } = event.queryStringParameters ? event.queryStringParameters : event;
    let avgStar = 0;

    switch (getReviewBy) {
        case 'ORDER':
            if (!id) return responseHandler(500, { error: "Order Id is required to get Reviews" });

            return getItemByIndex("Review", "orderId-index", "#orderId = :orderId", { "#orderId": "orderId" }, { ":orderId": id })
                .then((data) => {
                    console.log('data', data['Items'])
                    data['Items'].map(item => {
                        avgStar += parseFloat(item.star)
                    })
                    avgStar = avgStar / data['Count']
                    return responseHandler(200, { avgStar, reviews: data['Items'] })
                })
                .catch((error) => {
                    return responseHandler(500, error);
                })

        case 'PRODUCT':
        default:
            if (!id) return responseHandler(500, { error: "Product Id is required to get Reviews" });

            return getItemByIndex("Review", "productId-index", "#productId = :productId", { "#productId": "productId" }, { ":productId": id })
                .then((data) => {
                    console.log('data', data['Items'])
                    data['Items'].map(item => {
                        avgStar += parseFloat(item.star)
                    })
                    avgStar = avgStar / data['Count']
                    return responseHandler(200, { avgStar, reviews: data['Items'] })
                })
                .catch((error) => {
                    return responseHandler(500, error);
                })

    }

}

module.exports = { getProductReviews }