const { scan } = require("../lib/dynamodb");
const { responseHandler } = require('./../lib/responseHandler')

const getProductList = _ => {
    return scan({ TableName: 'Product' })
        .then((data) => {
            return responseHandler(200, data.Items.filter(item => item.statusId == 1))
        })
        .catch((error) => {
            return responseHandler(500, error);
        })
}

module.exports = { getProductList }