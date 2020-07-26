import React, { Component } from 'react';
import { connect } from 'react-redux';

class BillingAddress extends Component {
    render() {
        console.log(this.props.handleShipping)
        const { handleShipping } = this.props
        return (
            <div className="lf_payment_break_tp">
                <h3>Billing address</h3>
                <div className="lg_card_information na">
                    <div className="lf_payment_address">
                        {/* <p className="bold">User - {handleShipping.address} - <span>Shipping address</span></p> */}
                        <p>{handleShipping.fName} {handleShipping.lName}</p>
                        <p>{handleShipping.address},</p>
                        <p>{handleShipping.country}, {handleShipping.province}, {handleShipping.postalCode}</p>
                        <p>{handleShipping.phoneNumber}</p>

                    </div>
                </div>
            </div>
        );
    }
}
const mapStateToProps = state => {
    const {
        checkoutReducer: { handleShipping, handleShippingLoader, handleShippingError }
    } = state;
    return {
        handleShipping,
        handleShippingLoader,
        handleShippingError,
    };
};

export default connect(mapStateToProps, null)(BillingAddress);