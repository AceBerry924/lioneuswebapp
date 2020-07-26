
const customizeAuthMsg = (event, context, callback) => {
    console.log("event", JSON.stringify(event))

    if (event.triggerSource === "CustomMessage_SignUp") {
        event.response.emailSubject = "Verify Email";
        event.response.emailMessage = `
            <section style="padding: 40px 0 80px 0;">
                <div className="container">
                    <div
                        style="max-width: 490px;margin: auto;border: 1px solid #dadce0;padding: 30px;border-radius: 5px;margin-bottom: 40px;">
                        <div style="margin-bottom: 30px;">
                            <img href="https://www.lioneus.com/" src="https://www.lioneus.com/static/media/logo1.df4a95c1.png" alt="" style=" width: 100%;max-width: 120px;display: block;margin: auto;" />
                            <h3 style="margin: 0;text-align: center;font-size: 27px;">Hi ${event.request.userAttributes.name.split(" ")[0]}!</h3>
                        </div>
                        <div className="form-si-description">
                            <p style="font-size: 16px;padding-bottom: 2rem;color: #000000;">Your Lioneus verification code is <strong>${event.request.codeParameter}</strong></p>
                            <p style="font-size: 16px;padding-bottom: 2rem;color: #000000;>Thank You</p>
                        </div>
                    </div>
                    <div className="form-footer" style="text-align: center;max-width: 490px;margin: auto;font-size: 13px;">
                        <p>
                            Replies to this email aren't monitored. If you have a question
                            about your new account, the <a href="https://www.lioneus.com/help"
                                style="text-decoration: underline;">Help Center</a> likely has the
                            answer
                            you're looking for.
                        </p>
                        <span style="color: rgba(0, 0, 0, 0.54);">
                            This email is sent to you because you created a Lioneus Account.
                        </span>
                    </div>
                </div>
            </section>
        `
    }
    if (event.triggerSource === "CustomMessage_ForgotPassword") {
        event.response.emailSubject = "Reset Password";
        event.response.emailMessage = `
            <section style="padding: 40px 0 80px 0;">
                <div className="container">
                    <div
                        style="max-width: 490px;margin: auto;border: 1px solid #dadce0;padding: 30px;border-radius: 5px;margin-bottom: 40px;">
                        <div style="margin-bottom: 30px;">
                            <img href="https://www.lioneus.com/" src="https://www.lioneus.com/static/media/logo1.df4a95c1.png" alt="" style=" width: 100%; max-width:120px;display: block;margin: auto;" />
                            <h3 style="margin: 0;text-align: center;font-size: 27px;">Hi ${event.request.userAttributes.name.split(" ")[0]}!</h3>
                        </div>
                        <div className="form-si-description">
                            <p style="font-size: 16px;color: #000000;">Someone, hopefully you, has requested to reset the password for your Lioneus account on lioneus.com</p>
                            <p style="font-size: 16px;color: #000000;">If you did not perform this request, you can safely ignore this email.</p>
                            <p style="font-size: 16px;padding-bottom: 2rem;color: #000000;">Otherwise, here’s your code <strong>${event.request.codeParameter}</strong>.</p>
                            <p>Thank You</p>
                        </div>
                    </div>
                    <div className="form-footer" style="text-align: center;max-width: 490px;margin: auto;font-size: 13px;">
                        <p>
                            Replies to this email aren't monitored. If you have a question
                            about your new account, the <a href="https://www.lioneus.com/help"
                                style="text-decoration: underline;">Help Center</a> likely has the
                            answer
                            you're looking for.
                        </p>
                        <span style="color: rgba(0, 0, 0, 0.54);">
                            This email is sent to you because you reset a Lioneus Account.
                        </span>
                    </div>
                </div>
            </section>
        `
    }
    callback(null, event);
}

module.exports = { customizeAuthMsg }