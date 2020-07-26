const { getItem } = require("../lib/dynamodb");
const { responseHandler } = require('./../lib/responseHandler')
const { getSignedUrl } = require('./../lib/s3Helper')

const getProductPics = (event) => {
    let { productId } = event.queryStringParameters ? event.queryStringParameters : event;

    if (!productId) return responseHandler(500, { error: "Product Id is required to get product pictures" });
    let productData = []
    return getItem("Product", { productId })
        .then((data) => {
            if (data['Item'].pictures && data['Item'].pictures.length) {
                productData = data['Item']
                return data['Item']
            }
            else if (data['Item'].statusId === 0) {
                return { error: "Product has been Deleted." };
            }
            else {
                return { error: "Product does not have pictures" };
            }
        })
        .then((data) => {
            if (data.error) {
                return data;
            }

            return Promise.all(data['pictures'].map((key) => getSignedUrl(key, 604800)))
        })
        .then((data) => {
            if (data.error) {
                return responseHandler(200, []);
            }
            console.log(JSON.stringify(data))
            let response = productData['pictures'].map((key, index) => {
                return {
                    image: data[index],
                    key
                }
            })
            return responseHandler(200, response)

        })
        .catch((error) => {
            return responseHandler(500, error);
        })
}

module.exports = { getProductPics }