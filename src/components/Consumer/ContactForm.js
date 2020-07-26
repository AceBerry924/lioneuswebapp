import React from 'react'
import { ConsumerStyle } from '../common/assets/StyledComponent';
import PrimaryButton from '../common/Elements/Buttons/PrimaryButton'
import { Route } from 'react-router-dom'
class ContactSalesForm extends React.Component {
    render() {
        return (
            <ConsumerStyle>
                <div id="container">
                    <div className="form-si-header">
                        <img src={require('../common/assets/images/logo1.png')} alt="" />
                    </div>

                    <h1>Contact our sales team</h1>
                    <p>Our team is happy to answer your questions. Fill out the form and we’ll be in touch as soon as possible.</p>
                    <div className="underline">
                    </div>
                    <form action="#" method="post" id="contact_form">
                        <div className="name">
                            <label htmlFor="name" />
                            <input type="text" placeholder="Full Name" name="name" id="name_input" required />
                        </div>
                        <div className="email">
                            <label htmlFor="email" />
                            <input type="text" placeholder="Email" name="email" id="email_input" required />
                        </div>
                        <div className="telephone">
                            <label htmlFor="name" />
                            <input type="number" placeholder="Phone number" name="telephone" id="telephone_input" required />
                        </div>
                        <div className="subject">
                            <label htmlFor="subject" />
                            <select placeholder name="subject" id="subject_input" required>
                                <option disabled hidden selected>Business Sector</option>
                                <option>I sell products</option>
                                <option>I sell services</option>
                            </select>
                        </div>
                        <div className="message">
                            <label htmlFor="message" />
                            <textarea name="message" placeholder="Tell us more about your company and needs." id="message_input" cols={30} rows={5} required defaultValue={""} />
                        </div>
                        <div className="submit">
                            <input type="submit" defaultValue="Send Message" id="form_button" />
                        </div>
                        <div className="auth-section">
                            <React.Fragment>
                                <Route render={({ history }) => <PrimaryButton onClick={_ => history.push('/signup')} value="Create Account" id="signup-button" />} />
                                <div className="separator" />
                                <Route render={({ history }) =>
                                    <div className="brd-t-1 pt-20 mt-20">
                                        <button value="Sign In" className="btn btn-light signin-submit" onClick={_ => history.push('/signin')} value="Sign In" >Sign In</button>
                                    </div>} />
                            </React.Fragment>
                        </div>
                    </form>{/* // End form */}
                </div>
            </ConsumerStyle>
        );
    }
}

export default ContactSalesForm;