import React from 'react';
import { SignupStyle, Account } from '../../../common/assets/StyledComponent';
import { Link } from 'react-router-dom'
class Bank extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            active: 'FIRST'
        }
    }
    handleClick() {
        var active = this.state.active;
        var newActive = active === 'FIRST' ? 'SECOND' : 'FIRST';
        this.setState({
            active: newActive
        });
    }
    render() {
        const active = this.state.active
        return (
            <React.Fragment>
                <SignupStyle>
                    <section className="main">
                        <div className="container">
                            <div className="ub_form">
                                <div className="form-si-header" style={{ marginBottom: '0px' }}>
                                    <Link to="/">
                                    <img src={require('../../../common/assets/images/logo1.png')} alt="" />
                                    </Link>
                                    <h3>Bank</h3>
                                </div>
                                <div className="transfer">
                                    <span class="switcher switcher-1">
                                        <input type="checkbox" id="switcher-1" onClick={this.handleClick} />
                                        <label for="switcher-1"></label>
                                    </span>
                                </div>
                                <form>
                                    {active === 'FIRST' ? (
                                        <UsBank />
                                    ) : active === 'SECOND' ? (
                                        <CanadianBank />
                                    ) : null}
                                    <Account>
                                        <div className="account">
                                            <p>Account Type:</p>
                                            <div className="radio-buttons">
                                                <div class="custom-control custom-radio custom-control-inline">
                                                    <input type="radio" id="customRadioInline1" name="customRadioInline1" class="custom-control-input" />
                                                    <label class="custom-control-label" for="customRadioInline1">Chequing</label>
                                                </div>
                                                <div class="custom-control custom-radio custom-control-inline">
                                                    <input type="radio" id="customRadioInline2" name="customRadioInline1" class="custom-control-input" />
                                                    <label class="custom-control-label" for="customRadioInline2">Savings</label>
                                                </div>
                                            </div>
                                        </div>
                                    </Account>
                                    <div className="ub_form_buttons d-flex justify-content-between pt-3">
                                        <div className="ub_signin_btn" onClick={this.props.handlePrevClick}>
                                            <a href className="lio-btn lio-tertiary d-block w-100">Return </a>
                                        </div>
                                        <div>
                                            <button type="submit" className="lio-btn lio-primary d-block w-100" onClick={this.props.handleNextClick}>Next</button>
                                        </div>
                                    </div>
                                </form>

                            </div>
                        </div>
                    </section>
                </SignupStyle>
            </React.Fragment>
        );
    }
}

const CanadianBank = () => {
    return (
        <React.Fragment>
            <div className="wrap_input_div">
                <div className="wrap_input">
                    <label htmlFor="BankName" className>Bank Name</label>
                    <input id="BankName" type="text" className="riseInput form-control" />
                </div>
            </div>
            <div className="wrap_input_div">
                <div className="wrap_input">
                    <label htmlFor="BankTransit" className>Bank Transit</label>
                    <input id="BankTransit" type="number" className="riseInput form-control" />
                </div>
            </div>
            <div className="wrap_input_div">
                <div className="wrap_input">
                    <label htmlFor="AccountNumber" className>Account Number</label>
                    <input id="AccountNumber" type="text" className="riseInput form-control" />
                </div>
            </div>

        </React.Fragment>
    );
}
const UsBank = () => {
    return (
        <React.Fragment>
            <div className="wrap_input_div">
                <div className="wrap_input">
                    <label htmlFor="BankName" className>Bank Name</label>
                    <input id="BankName" type="text" className="riseInput form-control" />
                </div>
            </div>

            <div className="wrap_input_div">
                <div className="wrap_input">
                    <label htmlFor="RoutingNumber" className>Routing Number</label>
                    <input id="RoutingNumber" type="text" className="riseInput form-control" />
                </div>
            </div>
            <div className="wrap_input_div">
                <div className="wrap_input">
                    <label htmlFor="AccountNumber" className>Account Number</label>
                    <input id="AccountNumber" type="text" className="riseInput form-control" />
                </div>
            </div>
        </React.Fragment>
    );
}

export default Bank;