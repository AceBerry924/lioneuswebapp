import React from 'react';
import { AddToCartPageStyle } from '../../../common/assets/StyledComponent';
import CheckoutSummery from '../common/Summery'
import { StripeCard } from './StripeCard'
import { connect } from 'react-redux'
import { placeOrder } from '../../../../graphql/new-mutations'
import { LioneusAppClient } from './../../../../config/graphql-clients'
import { NotificationManager } from "react-notifications"

class Payment extends React.Component {

    state = {
        placeOrderLoader: false,
        mode : 'billing'
    }

    handlePlaceOrder = (event) => {
        if (event && event.error) return alert(event.error['message'])
        this.setState({ placeOrderLoader: true })
        const { token: { id } } = event
        const { selectedProducts, handleShipping, user } = this.props


        if (this.placeOrderValidation()) {
            const { address, country, email, fName, lName, phoneNumber, postalCode, province } = handleShipping
            let placeOrderInput = {
                items: selectedProducts.map(product => product.productId),
                tkn: id,
                email,
                firstName: fName,
                lastName: lName,
                address,
                country,
                province,
                postalCode,
                phoneNumber,
                userId: user.userId
            }

            LioneusAppClient.mutate({
                mutation: placeOrder,
                variables: { input: placeOrderInput }
            })
                .then((data) => {
                    this.setState({ placeOrderLoader: false })
                    NotificationManager.success("Approved! Your order  has been placed successfully/")
                    this.props.gotoReview()
                })
                .catch((error) => {
                    NotificationManager.error(error.message)
                    this.setState({ placeOrderLoader: false })
                })
        }
    }

    placeOrderValidation = () => {
        const { selectedProducts, handleShipping, user } = this.props

        if (!this.shippingAddressValidation(handleShipping)) {
            NotificationManager.error('invalid shipping address')
            return false
        }

        if (!selectedProducts.length) {
            NotificationManager.error('Product is Required to Place Order')
            return false
        }

        if (!user) {
            NotificationManager.error('User Authentication is Required to Place Order')
            return false
        }

        if (user && !user.userId) {
            NotificationManager.error('User Authentication is Required to Place Order')
            return false
        }

        return true;
    }

    shippingAddressValidation = (shippingAddress) => {
        const { address, country, email, fName, lName, phoneNumber, postalCode, province } = shippingAddress

        if (!address) return false
        if (!country) return false
        if (!email) return false
        if (!fName) return false
        if (!lName) return false
        if (!phoneNumber) return false
        if (!postalCode) return false
        if (!province) return false
        return true
    }

    render() {
        const { placeOrderLoader, mode } = this.state
        return (
            <AddToCartPageStyle>
                <section className="lf_main" id="payment" style={{ display: '' }}>
                    <div className="container">

                        <div className="lf_form_title">
                            <h3>Payment</h3>
                        </div>
                        <div className="row">
                            <div className="col-lg-8">
                                <div className="lf_form_wrapper">
                                    {/* <GiftCard /> */}
                                    <StripeCard
                                        handleResult={this.handlePlaceOrder}
                                        placeOrderLoader={placeOrderLoader}
                                        startLoader={() => this.setState({ placeOrderLoader: true })}
                                    />
                                </div>
                            </div>
                            <CheckoutSummery mode={'payment'}/>
                        </div>
                    </div>
                </section>
            </AddToCartPageStyle>
        );
    }
}

const mapStateToProps = state => {
    const {
        checkoutReducer: { selectedProducts, subtotal, discount, shipping, envHandlingFee, tax, handleShipping },
        authReducer: { user }
    } = state;
    return {
        selectedProducts, subtotal, discount, shipping, envHandlingFee, tax, handleShipping,
        user
    };
};

const mapDispatchToProps = dispatch => {
    return {};
};
export default connect(mapStateToProps, mapDispatchToProps)(Payment);