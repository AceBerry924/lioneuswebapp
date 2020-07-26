const AWS = require('aws-sdk')
AWS.config.update({ region: 'us-east-1' });
const SES = new AWS.SES({ apiVersion: "2010-12-01" })
const { getPrimaryEmail } = require('./helpers')

const sendEmails = (emails, msg, subject) => {
    let params = {
        Destination: {
            CcAddresses: [],
            ToAddresses: emails
        },
        Message: {
            Body: {
                Html: {
                    Charset: "UTF-8",
                    Data: msg
                },
                Text: {
                    Charset: "UTF-8",
                    Data: msg
                }
            },
            Subject: {
                Charset: "UTF-8",
                Data: subject
            }
        },
        Source: getPrimaryEmail(),
    };

    return SES.sendEmail(params).promise()
}


module.exports = {
    sendEmails
}