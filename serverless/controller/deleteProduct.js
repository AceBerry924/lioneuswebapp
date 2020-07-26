const { updateItem } = require("../lib/dynamodb");
const { responseHandler } = require('./../lib/responseHandler')
const { jwtAuthentication } = require('./../lib/helpers')

const deleteProduct = (event) => {
    let { productId, accesstoken } = event.queryStringParameters ? event.queryStringParameters : event;
    // console.log("event", JSON.stringify(event))
    return jwtAuthentication(accesstoken ? accesstoken : event.headers['accesstoken'])
        .then((user) => {
            const { sub } = user
            // console.log("sub", JSON.stringify(sub))
            return updateItem("Product", { productId }, "set statusId = :s", { ":s": 0, ":companyId": sub }, "company = :companyId")
        })
        .then((product) => {
            // console.log("product", JSON.stringify(product))
            return responseHandler(200, product["Attributes"])
        })
        .catch((error) => {
            let { message, status } = error
            if(message === "The conditional request failed") message = "You Are Not Authorize to Delete this Product"
            // console.log("error", JSON.stringify(error))
            return responseHandler(status ? status : 500, message ? { error: message } : { error })
        })
}

module.exports = { deleteProduct }