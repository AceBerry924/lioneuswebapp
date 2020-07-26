import React, { useEffect } from "react";
import ReactGA from 'react-ga';
import { BrowserRouter as Router, Route, Switch, useLocation } from "react-router-dom";
import LandingPage from "../components/Landing/LandingPage";
import SellPage from "../components/Auth/SignUp/SellPage";
import LoginPage from "../components/Auth/SignIn/LoginPage";
import SearchResultPage from "../components/Search/SearchResultPage";
import BusinessPage from "../components/Business/BusinessPage";
import About from "../components/common/Footer/About";
import Terms from "../components/common/Footer/Terms";
import WhatsNew from "../components/common/Footer/WhatsNew";
import Feedback from "../components/common/Footer/Feedback";
import Help from "../components/common/Footer/Help";
import ContactSalesForm from "../components/Consumer/ContactForm";
import SignUp from "../components/Auth/Consumer/SignUp/ContactSalesForm";
import Navbar from "../components/common/Header/Navbar";
import Verification from "../components/Auth/Verification";
import AuthenticatedRoute from "./AuthenticatedRoute";
import ForgetPassword from "../components/Auth/ForgetPassword";
import Checkout from "../components/Product/OrderProcess/Checkout";
import Payment from "../components/Product/OrderProcess/Payment/Payment";
import Review from "../components/Product/OrderProcess/Review";
import Wishlist from "../components/Product/Wishlist/Wishlist";
// import Transfer from '../components/Business/fundTransfer';
import ProductDetail from "../components/Product/UpdateProduct/ProductDetail";
import Discover from "../components/Product/Discover/Discover";
import { BookingStyle } from "../components/common/assets/StyledComponent";
import BusinessStore from "../components/Business/Store/BusinessStore";
import AddNewListModal from "../components/Product/AddProduct/AddNewListModal";
import AddProduct from "../components/Product/AddProduct";
import Email from "../components/Email";
import Preview from "../components/Product/UpdateProduct/Preview/Preview";
// import Pro from "../components/Email";

export default ({ childProps }) => {

  const location = useLocation();

  useEffect(() => {
    ReactGA.initialize(process.env.REACT_APP_GOOGLE_ANALYTICS_TRACKING_ID);
    ReactGA.pageview(location.pathname + window.location.search);
  }, [location.pathname])

  return (
    <Switch>
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/sell" component={SellPage} />
      <Route exact path="/business" component={BusinessPage} />
      <Route exact path="/signup" component={SignUp} />
      <Route exact path="/signin" component={LoginPage} />
      <Route exact path="/contact" component={ContactSalesForm} />
      <AuthenticatedRoute
        exact
        path="/mystore"
        component={BusinessStore}
        props={childProps}
      />
      <AuthenticatedRoute
        exact
        path="/list"
        component={AddProduct}
        props={childProps}
      />
      <Route exact path="/search/:query" component={SearchResultPage} />
      <Route exact path="/about" component={About} />
      <Route exact path="/feedback" component={Feedback} />
      <Route exact path="/terms" component={Terms} />
      <Route exact path="/whatsnew" component={WhatsNew} />
      <Route exact path="/help" component={Help} />
      <Route exact path="/booking" component={BookingStyle} />
      <Route exact path="/navbar" component={Navbar} />
      <Route exact path="/explore" component={Discover} />
      <Route exact path="/verification" component={Verification} />
      <Route exact path="/forget" component={ForgetPassword} />
      <Route exact path="/checkout" component={Checkout} />
      <Route exact path="/email" component={Email} />
      <Route exact path="/payment" component={Payment} />
      {/* <Route exact path="/email" component={Pro} /> */}
      <Route exact path="/review" component={Review} />
      <Route exact path="/wishlist" component={Wishlist} />
      {/* <Route exact path="/list" component={AddProduct} /> */}
      <Route exact path="/product/:id" component={ProductDetail} />
      <Route exact path="/store/:id" component={BusinessStore} />
      <Route exact path="/preview" component={Preview} />
      {/* <Route path="*" component={LandingPage} /> */}
    </Switch>
  );
};
