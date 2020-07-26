import React from 'react'
import { getUserCart } from '../../../../graphql/new-queries'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import { Query } from 'react-apollo'

class NewNavbar extends React.Component {
    render() {
        return (
            <header className="header">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-6">
                            <div className="logo">
                                <Link to="/"><img src={require('../../templates/checkout/images/logo1.png')} alt="" /></Link>
                            </div>
                        </div>
                        <div className="col-6">
                            <a href="#" className="cart_info">
                                <div className="cart_count">
                                    <img src={require('../../templates/checkout/images/shopping-cart.svg')} alt="" />
                                    {this.props.user && <Query
                                        query={getUserCart}
                                        fetchPolicy="network-only"
                                        variables={{ userId: this.props.user.userId }}
                                    >
                                        {
                                            ({ subcribeToMore, loading, error, data }) => {
                                                if (loading) return <p> loading...</p>
                                                if (error) return <p>error</p>
                                                console.log()
                                                return <span>{data.getUserCart.length}</span>
                                            }}
                                    </Query>
                                    }

                                </div>
                                <div>
                                    {/* <span>Cart</span> */}
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}
const mapStateToProps = state => {
    const {
        authReducer: { user }
    } = state;
    return {
        user
    };
}

export default connect(mapStateToProps, null)(NewNavbar);