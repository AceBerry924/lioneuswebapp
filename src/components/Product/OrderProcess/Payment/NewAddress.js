import React, { Component } from 'react';

export default class NewAddress extends Component {
    render() {
        return (
            <div className="lf_payment_break_tp border-top-0 mt-0">
                <div className="lg_card_information na pt-0 pb-0">
                    <h3 className="mb-0 lf_new_address_collapse">New Address</h3>
                    <div className="lf_payment_address pb-3 step_001" id="lf_new_address_show" style={{ display: '' }}>
                        <div className="lf_form_bc">
                            <div className="row col-10px">
                                <div className="col-sm-6">
                                    <div className="wrap_input_div">
                                        <div className="wrap_input">
                                            <label htmlFor="lf_na_firstname">First Name </label>
                                            <input id="lf_na_firstname" type="text" className="riseInput form-control step_001-field" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="wrap_input_div">
                                        <div className="wrap_input">
                                            <label htmlFor="lf_na_lastname">Last Name </label>
                                            <input id="lf_na_lastname" type="text" className="riseInput form-control step_001-field" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="wrap_input_div">
                                <div className="wrap_input">
                                    <label htmlFor="lf_address1">Address </label>
                                    <input id="lf_address1" type="text" className="riseInput form-control step_001-field" />
                                </div>
                            </div>
                            <div className="row col-10px">
                                <div className="col-md-6 col-xl-6 col-lg-8">
                                    <div className="wrap_input_div">
                                        <div className="wrap_input">
                                            <select name id="countries_changed1" className="form-control step_001-field">
                                                <option value>Country</option>
                                                <option value="CA">Canada</option>
                                                <option value="US">United States</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3 col-sm-6 col-lg-4 col-xl-3">
                                    <div className="wrap_input_div">
                                        <div className="wrap_input">
                                            <select name id="stats_changed1" className="form-control step_001-field">
                                                <option value>Province/State</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3 col-sm-6 col-lg-4 col-xl-3">
                                    <div className="wrap_input_div">
                                        <div className="wrap_input na">
                                            <label htmlFor="lf_postalcode1">Postal Code </label>
                                            <input id="lf_postalcode1" type="text" className="riseInput form-control step_001-field postcode" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row col-10px">
                                <div className="col-md-6 col-lg-4 col-xl-6">
                                    <div className="wrap_input_div">
                                        <div className="wrap_input">
                                            <label htmlFor="lf_city">City </label>
                                            <input id="lf_city" type="text" className="riseInput form-control step_001-field" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row col-10px">
                                <div className="col-md-6 col-lg-6 col-xl-3 col-sm-6">
                                    <div className="wrap_input_div">
                                        <div className="wrap_input">
                                            <label htmlFor="lf_na_phonenumber">Phone number </label>
                                            <input id="lf_na_phonenumber" type="text" className="riseInput form-control step_001-field number" />
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}