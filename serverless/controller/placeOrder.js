const { responseHandler } = require('../lib/responseHandler')
const { getItem, createItemInDynamoDB } = require("../lib/dynamodb");
const { getTimestamp } = require("../lib/helpers");
const stripe = require('stripe')(process.env.STRIPE_SK);
const placeOrder = async (event) => {

    let { body } = event.body && event.body ? event : JSON.parse(event)
    // input validations
    let { error } = validation(body)
    if (error) return responseHandler(500, { error });

    const { userId, tkn, items, email, firstName, lastName, address, country, province, postalCode, phoneNumber } = body
    let amount = 0;
    let orderData;
    let products = []

    return Promise.all(items.map(productId => getItem("Product", { productId })))
        .then((data) => {
            data.map((product) => {
                products.push(product['Item'])
                amount += parseFloat(product['Item'].amount)
            })

            return getStripeCharges((amount * 100).toFixed(), tkn, 'usd')
        })
        .then((data) => {
            orderData = {
                id: data.id,
                userId,
                stripChargedToken: tkn,
                email,
                firstName,
                lastName,
                address,
                country,
                province,
                postalCode,
                phoneNumber,
                amount,
                productIds: items,
                createdTimestamp: getTimestamp()
            }

            return createItemInDynamoDB(
                orderData,
                'Order',
                { '#id': 'id' },
                'attribute_not_exists(#id)'
            )
        })
        .then(()=>{
            return responseHandler(200, orderData)
        })
        .catch((error) => {
            console.log("error", JSON.stringify(error))
            return responseHandler(500, error)
        })
}

const getStripeCharges = async (amount, source, currency) => {
    return new Promise(async (resolve, reject) => {
        const response = await stripe.charges.create({ amount, source, currency })

        if (response && response.id) {
            resolve(response)
        }
        else {
            reject(resolve)
        }
    })
}

const validation = (body) => {
    const { userId, tkn, items, email, firstName, lastName, address, country, province, postalCode, phoneNumber } = body

    if (!userId) return { error: "User Id is Required" }
    if (!tkn) return { error: "Token is Required" }
    if (!items) return { error: "Items are Required" }
    if (items && !items.length) return { error: "Atleast one Item is Required" }
    if (!email) return { error: "Email is Required" }
    if (!firstName) return { error: "First Name is Required" }
    if (!lastName) return { error: "Last Name is Required" }
    if (!address) return { error: "Address is Required" }
    if (!country) return { error: "Country is Required" }
    if (!province) return { error: "Province or State is Required" }
    if (!postalCode) return { error: "Postal Code is Required" }
    if (!phoneNumber) return { error: "Phone Number is Required" }

    return { error: false }
}

module.exports = { placeOrder }