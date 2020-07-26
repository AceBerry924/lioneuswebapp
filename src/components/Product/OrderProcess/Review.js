import React from 'react';
import { AddToCartPageStyle } from '../../common/assets/StyledComponent';
import { Link } from 'react-router-dom'
class Review extends React.Component {
    render() {
        return (
            <React.Fragment>
            <AddToCartPageStyle>
            <section className="lf_main" id="thanks-status" style={{ display: '' }}>
                <div className="container">
                    <div className="lf_form_title">
                        <h3>Review</h3>
                    </div>
                    <div className="row align-items-center">
                        <div className="col-lg-12">
                            <div className="lf_form_wrapper">
                                <div className="lf_form_box lf_form_w_bg">
                                    <div className="lf_form_bc">
                                        <div className="row align-items-center">
                                            <div className="col-md-8">
                                                <div className="lf_step_review_Content_1">
                                                    <h3>Thank you for your order!</h3>
                                                    <p>We look forward to
                          seeing you soon.</p>
                                                    <p>Yours truly,<br />
                                                        Lioneus</p>
                                                    <p />
                                                </div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className="lf_step_review_Content_2">
                                                    <h3>Have any questions?</h3>
                                                    <p />
                                                    <Link to="/feedback" className="btn btn-primary pt-3 pb-3">Contact Support</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div> {/* lf_form_box */}
                            </div>
                        </div> {/* col-lg-8 end */}
                    </div>
                </div>
            </section>
            </AddToCartPageStyle>
            </React.Fragment>
        );
    }
}

export default Review;