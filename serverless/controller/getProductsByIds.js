const { getBatchItems } = require("../lib/dynamodb");
const { responseHandler } = require('./../lib/responseHandler')
const { getUnique } = require('./../lib/helpers')

const getProductsByIds = (event) => {
    console.log('event', JSON.stringify(event))
    let { products } = event.queryStringParameters ? event.queryStringParameters : event;
    let params = products.map(product => {
        return { productId: product }
    })
    return getBatchItems("Product", getUnique(params, 'productId'))
        .then((data) => {
            console.log('Items', JSON.stringify(data['Responses']['Product']))
            return responseHandler(200, data['Responses']['Product'])
        })
        .catch((error) => {
            return responseHandler(500, error);
        })
}

module.exports = { getProductsByIds }