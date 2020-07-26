const { scan } = require("../lib/dynamodb");
const { responseHandler } = require('./../lib/responseHandler')

const searchProducts = (event) => {
    let { text, searchBy, userId } = event.queryStringParameters ? event.queryStringParameters : event;
    text = text.toLowerCase();
    let params = createSearchParams(text, searchBy)
    // console.log('params', JSON.stringify(params))
    return scan(params)
        .then((data) => {
            return responseHandler(200, data.Items.filter(item => item.statusId == 1))
        })
        .catch((error) => {
            return responseHandler(500, error);
        })
}

const createSearchParams = (text, searchBy) => {
    switch (searchBy) {
        case 'TITLE':
            return {
                TableName: "Product",
                FilterExpression: "contains(#searchTitle, :searchTitle)",
                ExpressionAttributeNames: {
                    "#searchTitle": "searchTitle",
                },
                ExpressionAttributeValues: {
                    ":searchTitle": text
                }
            }

        case 'DESCRIPTION':
            return {
                TableName: "Product",
                FilterExpression: "contains(#searchDescription, :searchDescription)",
                ExpressionAttributeNames: {
                    "#searchDescription": "searchDescription"
                },
                ExpressionAttributeValues: {
                    ":searchDescription": text
                }
            }
        case 'AMOUNT':
            return {
                TableName: "Product",
                FilterExpression: "#amount = :amount",
                ExpressionAttributeNames: {
                    "#amount": "amount"
                },
                ExpressionAttributeValues: {
                    ":amount": parseFloat(text),
                }
            }
        default:
            return {
                TableName: "Product",
                FilterExpression: "contains(#searchTitle, :searchTitle) or contains(#searchDescription, :searchDescription)",
                ExpressionAttributeNames: {
                    "#searchTitle": "searchTitle",
                    "#searchDescription": "searchDescription"
                },
                ExpressionAttributeValues: {
                    ":searchTitle": text,
                    ":searchDescription": text
                }
            }
    }
}

module.exports = { searchProducts }