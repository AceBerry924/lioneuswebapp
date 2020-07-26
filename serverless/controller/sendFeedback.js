const { createItemInDynamoDB } = require("../lib/dynamodb");
const { responseHandler } = require('./../lib/responseHandler')
const { getPrimaryEmail } = require('./../lib/helpers')
const { sendEmails } = require('./../lib/sesHelper')
const uuid = require("uuid/v1");

const sendFeedback = (event) => {
    let body = event.body && event.body.email ? event.body : JSON.parse(event.body)
    const { email, name, message } = body

    let feedback = {
        feedbackId: uuid(),
        email,
        name,
        message
    }

    return createItemInDynamoDB(
        feedback,
        'Feedback',
        { '#feedbackId': 'feedbackId' },
        'attribute_not_exists(#feedbackId)'
    )
        .then((data) => {
            return sendEmails([getPrimaryEmail()], `${name} sent a feedback, "${message}" with "${email}"`, `Lioneus Feedback`)
        })
        .then((data) => {
            return responseHandler(200, feedback)
        })
        .catch((error) => {
            const { message } = error
            return responseHandler(500, { error: message ? message : JSON.stringify(error) });
        })
}

module.exports = { sendFeedback }