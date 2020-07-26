const { sendEmails } = require("../lib/sesHelper");
const { LOGO } = require('./../config')

const postSignUp = (event, context, callback) => {
    let userAttributes = event.request.userAttributes
    console.log('userAttributes', JSON.stringify(event))

    if (event['triggerSource'] === 'PostConfirmation_ConfirmForgotPassword') return callback(null, event)

    let customerEmailTemplate = `
        <section style="padding: 40px 0 80px 0;">
            <div className="container">
                <div style="max-width: 490px;margin: auto;border: 1px solid #dadce0;padding: 30px;border-radius: 5px;margin-bottom: 40px;">
                    <div style="margin-bottom: 30px;">
                        <img href="https://www.lioneus.com/" src="${LOGO}" alt="" style=" width: 100%;max-width: 120px;display: block;margin: auto;" />
                        <h3 style="margin: 0;text-align: center;font-size: 27px;">Welcome, ${userAttributes['custom:firstName']}!</h3>
                    </div>
                    <div className="form-si-description">
                        <p style="font-size: 16px;color: #000000;">Welcome to Lioneus! We hope you will find products that you are looking for. Explore now!</p>
                        <p style="font-size: 16px;color: #000000;">Enjoy!</p>
                    </div>
                    <div style="display:flex;width: 100%;justify-content: center;">
                        <a
                            href='https://www.lioneus.com/explore'
                            class="account-button"
                            type="submit"
                            style="margin: 0 auto; padding: 4px 15px;font-size: 19px;font-weight: 400;border: 1px solid transparent;text-align: center;vertical-align: middle;text-decoration: none !important;border-radius: 0.25rem;transition: color 0.15s;cursor: pointer;background: rgb(197, 179, 88);border-color: rgb(197, 179, 88);color: white !important;outline: none;"
                            onmouseover="this.getElementsByClassName('account-button')[0].style.boxShadow = '0px 4px 4px rgba(197, 179, 88, 0.4)'">
                            Explore
                        </a>
                    </div>
                </div>
                <div className="form-footer" style="text-align: center;max-width: 490px;margin: auto;font-size: 13px;">
                    <p>
                        Replies to this email aren't monitored. If you have a question about your new account, the
                        <a href="https://www.lioneus.com/help" style="text-decoration: underline;">Help Center</a>
                        likely has the answer you're looking for.
                    </p>
                    <span style="color: rgba(0, 0, 0, 0.54);">
                        This email was sent to you because you created a Lioneus Account.
                    </span>
                </div>
            </div>
        </section>
    `;

    let storeEmailTemplate = `
        <section style="padding: 40px 0 80px 0;">
            <div className="container">
                <div style="max-width: 490px;margin: auto;border: 1px solid #dadce0;padding: 30px;border-radius: 5px;margin-bottom: 40px;">
                    <div style="margin-bottom: 30px;">
                        <img href="https://www.lioneus.com/" src="${LOGO}" alt="" style=" width: 100%;max-width: 120px;display: block;margin: auto;" />
                        <h3 style="margin: 0;text-align: center;font-size: 27px;">Hi, ${userAttributes['custom:companyName']}!</h3>
                    </div>
                    <div className="form-si-description">
                        <p style="font-size: 16px;color: #000000;">Welcome to Lioneus. Your account comes with amazing features. Don't miss your next opportunity. List now and meet your next clients.</p>
                        <p style="font-size: 16px;color: #000000;">Enjoy!</p>
                    </div>
                    <div style="display:flex;width: 100%;justify-content: center;">
                        <a
                            href='https://www.lioneus.com/mystore'
                            class="account-button"
                            type="submit"
                            style="margin: 0 auto; padding: 4px 15px;font-size: 19px;font-weight: 400;border: 1px solid transparent;text-align: center;vertical-align: middle;text-decoration: none !important;border-radius: 0.25rem;transition: color 0.15s;cursor: pointer;background: rgb(197, 179, 88);border-color: rgb(197, 179, 88);color: white !important;outline: none;"
                            onmouseover="this.getElementsByClassName('account-button')[0].style.boxShadow = '0px 4px 4px rgba(197, 179, 88, 0.4)'">
                            Get Started
                        </a>
                    </div>
                </div>
                <div className="form-footer" style="text-align: center;max-width: 490px;margin: auto;font-size: 13px;">
                    <p>
                        Replies to this email aren't monitored. If you have a question about your new account, the
                        <a href="https://www.lioneus.com/help" style="text-decoration: underline;">Help Center</a>
                        likely has the answer you're looking for.
                    </p>
                    <span style="color: rgba(0, 0, 0, 0.54);">
                        This email was sent to you because you created a Lioneus Store.
                    </span>
                </div>
            </div>
        </section>
    `;

    let subject = userAttributes['custom:type'].toLowerCase() === 'consumer' ? "Explore" : "Greetings from Lioneus";
    let template = userAttributes['custom:type'].toLowerCase() === 'consumer' ? customerEmailTemplate : storeEmailTemplate;

    return sendEmails([userAttributes['email']], template, subject)
        .then((data) => {
            console.log('successfully sent email to', userAttributes['email'])
            return callback(null, event)
        })
        .catch((error) => {
            console.log('error in post signup', JSON.stringify(error))
            return callback(null, event)
        })
}

module.exports = { postSignUp }