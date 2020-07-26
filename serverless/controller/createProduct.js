const { createItemInDynamoDB } = require("../lib/dynamodb");
const { responseHandler } = require('./../lib/responseHandler')
const { getTimestamp } = require('./../lib/helpers')
const { uploadToS3 } = require('./../lib/s3Helper')
const uuid = require("uuid/v1");

const createProduct = (event) => {
    // console.log("event", JSON.stringify(event))
    let body = event.body && event.body.companyId ? event.body : JSON.parse(event.body)
    let { error } = validation(body)
    if (error) return responseHandler(500, { error });

    const { companyId, title, description, amount, type, pictures, country } = body

    const product = {
        productId: uuid(),
        company: companyId,
        title,
        description,
        amount,
        type,
        country,
        createdTimestamp: getTimestamp(),
        statusId: 1,
        searchTitle: title.toLowerCase(),
        searchDescription: description.toLowerCase()
    }

    if (pictures && pictures.length) {
        return Promise.all(pictures.map(picture => (
            uploadToS3({
                content: Buffer.from(picture.replace(/^data:image\/[a-z]+;base64,/, ""), 'base64'),
                filename: `${uuid()}.webp`
            }, "products")
        )))
            .then((data) => {
                // console.log("data", JSON.stringify(data.map(item => item['Key'])))

                // adding picture keys to save in database
                product['pictures'] = data.map(item => item['Key'])

                return createItemInDynamoDB(
                    product,
                    'Product',
                    { '#productId': 'productId' },
                    'attribute_not_exists(#productId)'
                )
            })
            .then((data) => {
                return responseHandler(200, product)
            })
            .catch((error) => {
                console.log('error', JSON.stringify(error))
                return responseHandler(500, error);
            })
    }
    else {
        return createItemInDynamoDB(
            product,
            'Product',
            { '#productId': 'productId' },
            'attribute_not_exists(#productId)'
        )
            .then((data) => {
                return responseHandler(200, product)
            })
            .catch((error) => {
                console.log('error', JSON.stringify(error))
                return responseHandler(500, error);
            })
    }
}


const validation = (body) => {
    const { companyId, title, amount } = body

    if (!companyId) return { error: "Company Id is Required" }
    if (!title) return { error: "Title is Required" }
    if (!amount) return { error: "Amount is Required" }

    return { error: false }
}

module.exports = { createProduct }