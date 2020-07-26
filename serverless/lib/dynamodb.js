const AWS = require('aws-sdk');
const docClient = new AWS.DynamoDB.DocumentClient({ region: 'us-east-1' });

let createItemInDynamoDB = (itemAttributes, table, expressionAttributes, conditionExpression) => {
    let tableParams = {
        Item: itemAttributes,
        TableName: table,
        ExpressionAttributeNames: expressionAttributes,
        ConditionExpression: conditionExpression
    };

    return docClient.put(tableParams).promise()
}

let getItemByQuery = (TableName, KeyConditionExpression, ExpressionAttributeNames, ExpressionAttributeValues) => {
    var params = {
        TableName,
        KeyConditionExpression,
        ExpressionAttributeNames,
        ExpressionAttributeValues
    };

    return docClient.query(params).promise()
}

let getItemByIndex = (TableName, IndexName, KeyConditionExpression, ExpressionAttributeNames, ExpressionAttributeValues) => {
    var params = {
        TableName,
        IndexName,
        KeyConditionExpression,
        ExpressionAttributeNames,
        ExpressionAttributeValues
    };

    return docClient.query(params).promise()
}

let getItem = (TableName, Key) => {
    var params = {
        TableName,
        Key
    };
    return docClient.get(params).promise()
}

let writeBatchItems = (tableName, items) => {
    let params = {
        RequestItems: {
            [tableName]: items
        }
    };

    return docClient.batchWrite(params).promise()
}

let getBatchItems = (tableName, Keys) => {
    let params = {
        RequestItems: {
            [tableName]: { Keys }
        }
    };

    return docClient.batchGet(params).promise()
}

let scan = (params) => {
    return docClient.scan(params).promise()
}

let updateItem = (TableName, Key, UpdateExpression, ExpressionAttributeValues, ConditionExpression) => {
    let params = {
        TableName,
        Key,
        UpdateExpression,
        ExpressionAttributeValues,
        ReturnValues: "ALL_NEW"
    }

    // when we want to upate item with condition
    if(ConditionExpression){
        params['ConditionExpression'] = ConditionExpression
    }

    return docClient.update(params).promise()
}

let deleteItem = (TableName, Key) => {
    var params = {
        TableName,
        Key,
        ReturnValues: "ALL_OLD"
    };

    return docClient.delete(params).promise()
}

module.exports = {
    createItemInDynamoDB,
    getItemByQuery,
    getItem,
    writeBatchItems,
    getItemByIndex,
    getBatchItems,
    scan,
    updateItem,
    deleteItem
}