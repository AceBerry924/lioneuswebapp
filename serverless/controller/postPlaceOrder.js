const { getItem, deleteItem } = require("../lib/dynamodb");
const { getUnique } = require("../lib/helpers");
const { sendEmails } = require('./../lib/sesHelper')
const { LOGO } = require('./../config')
const postPlaceOrder = async (event, context, callback) => {

    // console.log("event", JSON.stringify(event))
    let { dynamodb } = event['Records'][0]
    // console.log("dynamodb", JSON.stringify(dynamodb))

    if (dynamodb['OldImage']) {
        // console.log("Old Image")
        var { OldImage: { id, productIds, userId, firstName, email, address, province, country, amount, postalCode } } = dynamodb

    } else if (dynamodb['NewImage']) {
        // console.log("New Image")
        var { NewImage: { id, productIds, userId, firstName, email, address, province, country, amount, postalCode } } = dynamodb
    }

    id = id['S']
    productIds = productIds['L'].map(p => p['S'])
    userId = userId['S']
    firstName = firstName['S']
    email = email['S']
    address = address['S']
    province = province['S']
    country = country['S']
    postalCode = postalCode['S']
    amount = amount['N']

    let products = []
    let companies = []
    let filteredProdictsIds = getUnique(productIds.map(p => ({ productId: p })), 'productId')

    return Promise.all(filteredProdictsIds.map(p => getItem("Product", { productId: p.productId })))
        .then((data) => {
            let getCompaniesPromises = data.map((product, index) => {
                product = product['Item']
                products.push({ ...product, quantity: productIds.filter(pId => pId === product.productId).length })
                return getItem("User", { userId: product.company })
            })

            // console.log("products", JSON.stringify(products))
            return Promise.all(getCompaniesPromises)
        })
        .then((data) => {
            companies = data.map((company) => company['Item'])
            // console.log("companies", JSON.stringify(companies))
            let emailPromises = [sendEmails([email], generateCustomerEmailTemplate(products, firstName, address, province, country, amount, postalCode), `Order Placed on Lioneus`)]

            products.map((product, index) => {
                let company = companies[index]
                emailPromises.push(sendEmails([company.email], generateBusinessEmailTemplate(product, firstName, company, address, province, country, postalCode), `Purchase Order`))
            })

            return Promise.all(emailPromises)
                // .then(() => {
                //     return callback(null, event)
                // })
                .catch((error) => {
                    console.log("error in sending email", JSON.stringify(error))
                    return callback(null, event)
                })
        })
        .then(() => {
            // After successful purchase the products should be remove from user cart
            return Promise.all(filteredProdictsIds.map(p => deleteItem("UserCart", { userId, productId: p.productId })))
        })
        .then(() => {
            return callback(null, event)
        })
        .catch((error) => {
            console.log("error", JSON.stringify(error))
            callback(null, event)
            // return responseHandler(500, error)
        })
}

const generateCustomerEmailTemplate = (products, firstName, address, province, country, amount, postalCode) => {

    let customerEmailTemplate = `
        <section style="padding: 40px 0 80px 0;">
            <div className="container">
                <div style="max-width: 490px;margin: auto;border: 1px solid #dadce0;padding: 30px;border-radius: 5px;margin-bottom: 40px;">
                    <div style="margin-bottom: 30px;">
                        <img href="https://www.lioneus.com/" src="${LOGO}" alt="" style=" width: 100%;max-width: 120px;display: block;margin: auto;" />
                        <h3 style="margin: 0;text-align: center;font-size: 27px;">Hello, ${firstName}!</h3>
                    </div>
                    <div className="form-si-description">
                        <p style="font-size: 16px;color: #4c4c4c;">Thank you for shopping at Lioneus.</p>
                        <p style="font-size: 16px;color: #4c4c4c;">Here’s your order details:</p>
                        <p style="font-size: 16px;color: #4c4c4c;">Shipping address: ${address}, ${postalCode}, ${province}, ${country}.</p>
                        <p style="font-size: 16px;color: #4c4c4c;">Order details:</p>
                        <table style="font-family: arial, sans-serif; border-collapse: collapse; width: 100%;">
                            <tr>
                                <th style="border: 1px solid #dddddd; text-align: left; padding: 8px;">Title</th>
                                <th style="border: 1px solid #dddddd; text-align: left; padding: 8px;">Quantity</th> 
                                <th style="border: 1px solid #dddddd; text-align: left; padding: 8px;">Price</th>
                            </tr>
                            ${renderProductDetail()}
                            <tr>
                                <th colspan="2" style="border: 1px solid #dddddd; text-align: left; padding: 8px;">Total Amount</th>
                                <th style="border: 1px solid #dddddd; text-align: left; padding: 8px;">$${amount}</th>
                            </tr>
                        </table>
                        <p style="font-size: 16px;color:#4c4c4c;">We look forward to seeing you soon!</p>
                        <p style="font-size: 16px;padding-bottom: 1rem;color: #4c4c4c;">If you have any questions about your order contact us. </p>
                        <p style="font-size: 16px;color:#4c4c4c;">Thank You</p>
                    </div>
                    <div style="display:flex;width: 100%;justify-content: center;">
                        <a
                            href='mailto:info@lioneus.com'
                            class="account-button"
                            type="submit"
                            style="margin: 0 auto; padding: 4px 15px;font-size: 19px;font-weight: 400;border: 1px solid transparent;text-align: center;vertical-align: middle;text-decoration: none !important;border-radius: 0.25rem;transition: color 0.15s;cursor: pointer;background: rgb(197, 179, 88);border-color: rgb(197, 179, 88);color: white !important;outline: none;"
                            onmouseover="this.getElementsByClassName('account-button')[0].style.boxShadow = '0px 4px 4px rgba(197, 179, 88, 0.4)'">
                            Support
                        </a>
                    </div>
                </div>
                <div className="form-footer" style="text-align: center;max-width: 490px;margin: auto;font-size: 13px;">
                    <p>
                        Replies to this email aren't monitored. If you have a question about your order, the
                        <a href="https://www.lioneus.com/help" style="text-decoration: underline;">Help Center</a>
                        likely has the answer you're looking for.
                    </p>
                    <span style="color: rgba(0, 0, 0, 0.54);">
                        This email is sent to you because you place an order on Lioneus.
                    </span>
                </div>
            </div>
        </section>
    `;

    function renderProductDetail() {
        var tableRow = ''
        for (i = 0; i < products.length; i++) {
            tableRow += `
            <tr>
                <td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">${products[i].title}</td> 
                <td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">${products[i].quantity} x ${products[i].amount}</td>
                <td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">$${products[i].amount * products[i].quantity}</td>
            </tr>
         `
        }
        return tableRow
    }

    return customerEmailTemplate;
}

const generateBusinessEmailTemplate = (product, firstName, company, address, province, country, postalCode) => {

    let customerEmailTemplate = `
        <section style="padding: 40px 0 80px 0;">
            <div className="container">
                <div style="max-width: 490px;margin: auto;border: 1px solid #dadce0;padding: 30px;border-radius: 5px;margin-bottom: 40px;">
                    <div style="margin-bottom: 30px;">
                        <img href="https://www.lioneus.com/" src="${LOGO}" alt="" style=" width: 100%;max-width: 120px;display: block;margin: auto;" />
                        <h3 style="margin: 0;text-align: center;font-size: 27px;">Hello, ${company.name}!</h3>
                    </div>
                    <div className="form-si-description">
                        <p style="font-size: 16px;color: #4c4c4c;">${firstName} just bought ${product.quantity} ${product.title} ordered on ${today()}.</p>
                        <p style="font-size: 16px;color: #4c4c4c;">Here’s the address for shipping: ${address}, ${province}, ${postalCode}, ${country}.</p>
                        <p style="font-size: 16px;padding-bottom: 1rem;color: #4c4c4c;">If you have any questions about your purchase order contact us. </p>
                        <p style="font-size: 16px;color:#4c4c4c;">Thank You</p>
                    </div>
                    <div style="display:flex;width: 100%;justify-content: center;">
                        <a
                            href='mailto:info@lioneus.com'
                            class="account-button"
                            type="submit"
                            style="margin: 0 auto; padding: 4px 15px;font-size: 19px;font-weight: 400;border: 1px solid transparent;text-align: center;vertical-align: middle;text-decoration: none !important;border-radius: 0.25rem;transition: color 0.15s;cursor: pointer;background: rgb(197, 179, 88);border-color: rgb(197, 179, 88);color: white !important;outline: none;"
                            onmouseover="this.getElementsByClassName('account-button')[0].style.boxShadow = '0px 4px 4px rgba(197, 179, 88, 0.4)'">
                            Support
                        </a>
                    </div>
                </div>
                <div className="form-footer" style="text-align: center;max-width: 490px;margin: auto;font-size: 13px;">
                    <p>
                        Replies to this email aren't monitored. If you have a question about your order, the
                        <a href="https://www.lioneus.com/help" style="text-decoration: underline;">Help Center</a>
                        likely has the answer you're looking for.
                    </p>
                    <span style="color: rgba(0, 0, 0, 0.54);">
                        This email is sent to you because you recieve an order on Lioneus.
                    </span>
                </div>
            </div>
        </section>
    `;

    function today() {
        let d = new Date();
        return `${d.getDate()}-${d.getMonth()}-${d.getFullYear()}`
    }

    return customerEmailTemplate;
}


module.exports = { postPlaceOrder }