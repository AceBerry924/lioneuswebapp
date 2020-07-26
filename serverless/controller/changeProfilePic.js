
const { responseHandler } = require('./../lib/responseHandler')
const { uploadToS3 } = require('./../lib/s3Helper')

const changeProfilePic = (event) => {
    let body = event.body && event.body.userId ? event.body : JSON.parse(event.body)
    let { picture, userId, type } = body

    return uploadToS3({
        content: Buffer.from(picture.replace(/^data:image\/[a-z]+;base64,/, ""), 'base64'),
        filename: `${userId}.jpg`
    }, type ? type : "users")
        .then((data) => {
            console.log("data", JSON.stringify(data))

            return responseHandler(200, true)
        })
        .catch((error) => {
            console.log('error', JSON.stringify(error))
            return responseHandler(500, error);
        })
}

module.exports = { changeProfilePic }