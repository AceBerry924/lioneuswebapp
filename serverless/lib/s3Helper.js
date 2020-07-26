const AWS = require('aws-sdk');
const serverConfig = require('./../config/index')
const s3 = new AWS.S3()

const uploadToS3 = (file, foldername) => {
    // console.log('file to upload s3', file)
    let s3bucket = new AWS.S3({ params: { Bucket: `${serverConfig.BUCKET}/${foldername}` } });
    var params = {
        Key: file.filename,
        Body: file.content
    };
    return s3bucket.upload(params).promise();
}

const getSignedUrl = (Key, Expires) => {
    return new Promise((resolve, reject) => {
        return s3.getSignedUrl('getObject', {
            Bucket: serverConfig.BUCKET,
            Key,
            Expires: Expires ? Expires : 7200 // two hours
        }, (error, url) => {
            if (error) {
                reject(error)
            }
            else {
                resolve(url)
            }
        })
    })

}

const getImageInBase64String = (Key) => {
    return new Promise((resolve, reject) => {
        return s3.getObject({
            Bucket: serverConfig.BUCKET,
            Key
        }, (error, file) => {
            if (error) {
                reject(error)
            }
            else {
                resolve("data:image/jpeg;base64," + Buffer.from(file.Body).toString('base64'))
            }
        })
    })
}

const deleteObjectFromS3 = (Key) => {
    return new Promise((resolve, reject) => {
        return s3.deleteObject({
            Bucket: serverConfig.BUCKET,
            Key
        }, (error, data) => {
            if (error) {
                reject(error)
            }
            else {
                resolve(data)
            }
        })
    })
}

module.exports = {
    uploadToS3,
    getSignedUrl,
    getImageInBase64String,
    deleteObjectFromS3
}