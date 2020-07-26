const { updateItem } = require("../lib/dynamodb");
const { responseHandler } = require('./../lib/responseHandler')

const updateProduct = (event) => {
    let body = event.body && event.body.productId ? event.body : JSON.parse(event.body);
    if (validation(body)) return // stop working if productId is missing

    let { productId, title, description, amount } = body

    let str = "set "
    let obj = {}

    if (title) {
        str += "title = :title, "
        obj[":title"] = title
    }

    if (description) {
        str += "description = :description, "
        obj[":description"] = description
    }

    if (amount) {
        str += "amount = :amount, "
        obj[":amount"] = amount
    }
    if (str.slice(-2) == ', ') str = str.substring(0, str.length - 2)

    // console.log("event", JSON.stringify(event))
    return updateItem("Product", { productId }, str, obj)
        .then((product) => {
            console.log("product", JSON.stringify(product))
            return responseHandler(200, product["Attributes"])
        })
        .catch((error) => {
            let { message, status } = error
            return responseHandler(status ? status : 500, message ? { error: message } : { error })
        })
}

const validation = (params) => {
    if (!params['productId']) {
        responseHandler(500, { error: "Product Id is required to update Product" })
        return true
    }
    
    if (!params['title'] && !params['description'] && !params['amount']) {
        responseHandler(500, { error: "Missing attributes to update the Product" })
        return true
    }
}

module.exports = { updateProduct }