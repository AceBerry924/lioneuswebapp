const { getItem, updateItem } = require("../lib/dynamodb");
const { responseHandler } = require('./../lib/responseHandler')
// const { getTimestamp } = require('./../lib/helpers')
const { uploadToS3 } = require('./../lib/s3Helper')
const uuid = require("uuid/v1");

const addProductPictures = (event) => {
    // console.log("event", JSON.stringify(event))
    let body = event.body && event.body.productId ? event.body : JSON.parse(event.body)
    let { error } = validation(body)
    if (error) return responseHandler(500, { error });

    const { productId, pictures } = body
    let newPicKeys = []
    return Promise.all(pictures.map(picture => (
        uploadToS3({
            content: Buffer.from(picture.replace(/^data:image\/[a-z]+;base64,/, ""), 'base64'),
            filename: `${uuid()}.webp`
        }, "products")
    )))
        .then((data) => {
            // console.log("getting product: data->[keys]", JSON.stringify(data.map(item => item['Key'])))
            newPicKeys = data.map(item => item['Key']);
            return getItem("Product", { productId })
        })
        .then((data) => {
            // console.log('updating product pictures: product', JSON.stringify(data['Item']))
            // adding picture keys to save in database
            let product = data['Item']
            // if (product['pictures'] && !product['pictures'].length) product['pictures'] = []
            // if (!product['pictures']) product['pictures'] = []
            
            newPicKeys.map(item => {
                product['pictures'].push(item)
            })

            return updateItem("Product", { productId }, "set pictures = :pictures", { ":pictures": product['pictures'] })
        })
        .then((data) => {
            console.log("success", JSON.stringify(data['Attributes']))
            return responseHandler(200, data['Attributes'])
        })
        .catch((error) => {
            console.log('error', JSON.stringify(error))
            return responseHandler(500, error);
        })

}


const validation = (body) => {
    const { productId, pictures } = body

    if (!productId) return { error: "Product Id is Required" }
    if (!pictures) return { error: "Product picture is Required" }
    if (pictures && !pictures.length) return { error: "Product pictures are Required" }

    return { error: false }
}

module.exports = { addProductPictures }