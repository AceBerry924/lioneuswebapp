const { updateItem, getItem } = require("../lib/dynamodb");
const { responseHandler } = require('./../lib/responseHandler')
const { deleteObjectFromS3 } = require('./../lib/s3Helper')

const deleteProductPicture = (event) => {
    let { productId, pictureKey } = event.queryStringParameters ? event.queryStringParameters : event;
    let product;
    
    return getItem("Product", { productId })
        .then((data) => {
            product = data['Item']
            let pictures = product.pictures && product.pictures.filter((key) => key !== pictureKey)
            console.log('pictures', JSON.stringify(pictures))
            return updateItem("Product", { productId }, "set pictures = :pictures", { ":pictures": pictures })
        })
        .then(_ => {
            return deleteObjectFromS3(pictureKey)
        })
        .then(_ => {
            // console.log("product", JSON.stringify(product))
            return responseHandler(200, product)
        })
        .catch((error) => {
            let { message, status } = error
            console.log("error", JSON.stringify(error))
            return responseHandler(status ? status : 500, message ? { error: message } : { error })
        })
}

module.exports = { deleteProductPicture }