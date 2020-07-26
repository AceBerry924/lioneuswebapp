import React, { Component } from 'react';

export default class GiftCard extends Component {
    render() {
      return (
        <div className="lf_form_collapse_opt">
            <div className="lf_form_box lf_form_box_payment">
                <button className="toggle_gift_card" type="button" id="giftcard_collapse"><img src={require('../../../../templates/checkout/images/logo1.png')} alt="" /><span>Gift Card</span></button>
            </div>
            <div className="step_001" id="giftcard_collapse_open" style={{ display: '' }}>
                <div className="lf_form_box lf_form_box_payment border-top-0">
                    <div className="lf_form_bc">
                        <p>You can apply up to 2 gift cards per order.</p>
                        <div className="row">
                            <div className="col-lg-6 col-md-7">
                                <div className="wrap_input_div">
                                    <div className="wrap_input na">
                                        <label htmlFor="lf_pgiftcard">Gift Card Number </label>
                                        <input id="lf_pgiftcard" type="number" className="riseInput form-control gift-val step_001-field" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-5">
                                <div className="wrap_input_div mb-2">
                                    <div className="wrap_input na">
                                        <label htmlFor="lf_pppin">PIN </label>
                                        <input id="lf_pppin" type="number" className="riseInput form-control gift-val step_001-field" />
                                    </div>
                                </div>
                                <p className="mb-3 mb-sm-0">4-digit number</p>
                            </div>
                            <div className="col-lg-3 mt-3 mt-lg-0">
                                <button type="button" className="btn btn-warning d-block w-100 signin-submit" id="apply_button">Apply</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="lf_border_tp">
                    <button className="toggle_gift_card" id="giftcard_close" type="button">Cancel</button>
                </div>
            </div> 
        </div>
      );
    }
  }