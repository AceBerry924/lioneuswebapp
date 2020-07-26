const { createItemInDynamoDB, getItemByIndex } = require("../lib/dynamodb");

const signupObjAttributes = {}
const preSignUp = (event, context, callback) => {

    let userAttributes = event.request.userAttributes
    let userId = event.userName

    return validationPreSignUp(userAttributes, userId)
        .then((data) => {
            if (data.Count) {
                return { error: `Company with ${signupObjAttributes['companyName']} name is already in use. Please choose another one.`}
            }

            return createItemInDynamoDB(
                signupObjAttributes,
                "User",
                { "#userId": "userId" },
                "attribute_not_exists(#userId)"
            )
        })
        .then((data) => {
            if (data.error) {
                return callback(JSON.stringify(data.error), event)
            }
            return callback(null, event)
        })
        .catch((error) => {
            const { message } = error
            return callback(message ? message : JSON.stringify(error), event)
        })
}

const validationPreSignUp = (userAttributes, userId) => {
    return new Promise((resolve, reject) => {
        if (!userAttributes.hasOwnProperty("custom:type")) reject("User type is Required for Sign-up")
        if (!userAttributes.hasOwnProperty("name")) reject("Name is Required for Sign-up")

        signupObjAttributes['userId'] = userId
        signupObjAttributes['name'] = userAttributes['name']
        signupObjAttributes['firstName'] = userAttributes['custom:firstName']
        signupObjAttributes['lastName'] = userAttributes['custom:lastName']
        signupObjAttributes['email'] = userAttributes['email']
        signupObjAttributes['type'] = userAttributes['custom:type'].toUpperCase()
        signupObjAttributes['createdTimestamp'] = new Date().getTime()
        signupObjAttributes['statusId'] = 1

        switch (userAttributes['custom:type'].toLowerCase()) {
            case 'consumer':
                // for required attributes  
                // if (!userAttributes.hasOwnProperty("birthdate")) reject("Date of Birth is Required for Sign-up")
                // if (!userAttributes.hasOwnProperty("gender")) reject("Gender is Required for Sign-up")
                if (!userAttributes.hasOwnProperty("custom:firstName")) reject("First Name is Required for Sign-up")
                if (!userAttributes.hasOwnProperty("custom:lastName")) reject("Last Name is Required for Sign-up")

                // for invalid attributes
                if (userAttributes.hasOwnProperty("custom:companyName")) reject("Company Name is Invalid attribute for Sign-up as a Consumer")

                // signupObjAttributes['birthdate'] = userAttributes['birthdate']
                // signupObjAttributes['gender'] = userAttributes['gender']
                resolve(signupObjAttributes)
                break;

            case 'business':
                // for required attributes  
                if (!userAttributes.hasOwnProperty("custom:companyName")) reject("Company Name is Required for Sign-up")

                // for invalid attributes
                // if (userAttributes.hasOwnProperty("birthdate")) reject("Date of Birth is Invalid attribute for Sign-up as a Business")
                // if (userAttributes.hasOwnProperty("gender")) reject("Gender is Invalid attribute for Sign-up as a Business")

                signupObjAttributes['gender'] = userAttributes['gender']
                signupObjAttributes['companyName'] = userAttributes['custom:companyName']

                // company name validation
                return resolve(getItemByIndex("User", "companyName-index", "#companyName = :companyName", { "#companyName": "companyName" }, { ":companyName": signupObjAttributes['companyName'] }))

            default:
                reject("User type must be CONSUMER or BUSINESS.")
                break;
        }
    })
}

module.exports = { preSignUp }