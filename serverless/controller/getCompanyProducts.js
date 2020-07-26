const { getItemByIndex } = require("../lib/dynamodb");
const { responseHandler } = require('./../lib/responseHandler')

const getCompanyProducts = (event) => {
    // console.log("event", JSON.stringify(event))
    let { companyId } = event.queryStringParameters ? event.queryStringParameters : event;

    if (!companyId) return responseHandler(500, { error: "Company ID is required to get Products" });

    return getItemByIndex("Product", "company-index", "#company = :company", { "#company": "company" }, { ":company": companyId })
        .then((data) => {
            return responseHandler(200, data['Items'])
        })
        .catch((error) => {
            return responseHandler(500, error);
        })
}

module.exports = { getCompanyProducts }