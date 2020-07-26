const { updateItem, getItem } = require("../lib/dynamodb");
const { responseHandler } = require('./../lib/responseHandler')

const updateUserAttribute = (event) => {
    let { userId, attributeName, text } = event.body ? event.body : JSON.parse(event).body;

    let str = ""
    let obj = {}
    if (attributeName === 'announcement') {
        str = "set announcement = :announcement"
        obj = { ":announcement": text }
    }
    else if (attributeName === 'story') {
        str = "set story = :story"
        obj = { ":story": text }
    }
    else if (attributeName === 'policies') {
        str = "set policies = :policies"
        obj = { ":policies": text }
    }
    else {
        responseHandler(500, { error: "Invalid Attribute Name!" })
    }

    // console.log("event", JSON.stringify(event))
    return updateItem("User", { userId }, str, obj)
        .then((user) => {
            console.log("user", JSON.stringify(user))
            return responseHandler(200, user["Attributes"])
        })
        .catch((error) => {
            let { message, status } = error
            return responseHandler(status ? status : 500, message ? { error: message } : { error })
        })
}

module.exports = { updateUserAttribute }