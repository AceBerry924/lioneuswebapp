const { responseHandler } = require('./../lib/responseHandler')
const { getImageInBase64String } = require('./../lib/s3Helper')

const getUserProfilePicture = (event) => {
    // console.log("event", JSON.stringify(event))
    let { userId, type } = event.queryStringParameters ? event.queryStringParameters : event;

    if (!userId) return responseHandler(500, { error: "User Id is required to get User Picture" });


    return getImageInBase64String(`${type ? type : 'users'}/${userId}.jpg`)
        .then((data) => {
            console.log("user image", JSON.stringify(data))
            return responseHandler(200, data)
        })
        .catch((error) => {
            console.log("error", JSON.stringify(error))
            if (error['message'] === 'The specified key does not exist.') {
                return responseHandler(200, null)
            }
            return responseHandler(500, error);
        })
}

module.exports = { getUserProfilePicture }