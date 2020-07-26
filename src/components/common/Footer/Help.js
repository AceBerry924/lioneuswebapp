import React from "react";
import { HelpStyle } from "./StyledComponent/StyledComponent";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
const Help = () => {
  return (
    <React.Fragment>
      <Header />
      <HelpStyle>
        <div className="card" >
          <h1>How can we help you today?</h1>
          <hr
            style={{
              width: "300px",
              height: "1px",
              border: "none",
              color: "#e7dbb7",
              margin: "1em auto",
              backgroundColor: "#e7dbb7",
            }}
          />
          <div className="content-wrapper">
          <h2>What is Selling on Lioneus?</h2>
            <p>
            Selling on Lioneus is a platform that enables both individuals and businesses to sell their products to Lioneus customers. Signing up will enable you to sell on our Canadian, U.S., and Mexican marketplaces.
            </p>
            <h2>Why should I sell on Lioneus?</h2>
            <p>
            There are many reasons to sell on Lioneus—from the hundreds of Lioneus customers who can see your products to the ability to start selling fast without the need to create a new standalone website.
            </p><h2>What products can I sell on Lioneus?</h2>
            <p>
            You can sell in a wide range of categories. 
            </p><h2>Are there products that I cannot sell on Lioneus?</h2>
            <p>
            Some products are prohibited or restricted based on a variety of reasons including, but not limited to, safety, health, and government restrictions. For more information about the kinds of products that cannot be sold on Lioneus.com, see  <a href="https://www.lioneus.com/terms">Prohibited Content and Restricted Products.</a>.
            </p>
            <h2>How can I sell on the Canadian, U.S., and Mexican marketplaces?</h2>
            <p>
            When you sign up as a Business or Enterprise subscription you will have access to sell on our Canadian, U.S., and Mexican marketplaces through a North America Unified Account. This will enable you more easily to share product listing information and manage your inventory consistently across all three marketplaces. For all per-item transaction fees, sellers will pay the fees applicable to the marketplace in which the item was sold. If you're a Business or Enterprise seller, you will only be charged one monthly subscription fee for selling in North America. If you are a new seller registering to sell in Canada, the U.S., or Mexico, you can be paid directly in your local bank account in the local currency, provided you have a bank account in a country/region supported by Lioneus.
            </p>
            <h2>When do I start getting charged the monthly subscription fee?</h2>
            <p>
            The monthly subscription fee applies to Business or Enterprise selling accounts only, and your subscription begins as soon as you complete the registration process. Your first monthly subscription fee will be charged at that time unless otherwise stated in any promotional offers.
            </p><h2>How do I get paid?</h2>
            <p>
            Lioneus deposits payment into your bank account at regular intervals and notifies you that your payment has been sent. Disbursements can be made in Canadian dollars (CDN) to your Canadian bank account or in U.S. dollars (USD) to your U.S. bank account. For a settlement to take place, you must:
            <ul>
              <li>Have entered valid bank account information for your seller account.
              </li>
            </ul>
            </p><h2>Can customers leave feedback and why is customer feedback important?</h2>
            <p>
            Yes, customers can leave feedback about the products they purchase and their experience with sellers. As a seller, maintaining a high feedback rating is a critical factor for success on Lioneus. It's the best way for shoppers to identify you as a trustworthy seller. Your rating appears on the Offer Listing Page and is one of the first things that customers see. Customers are more likely to purchase products from sellers with higher ratings
            </p>
            <h2>Why you'll love selling on Lioneus</h2>
            <ul>
              <li>
                Sell right from your phone. Lioneus makes listing even faster
                and more convenient.
              </li>
              <li>
                Easy listing. It's easier than ever to list what you're selling
                and get it seen by people looking for your items.
              </li>
              <li>Free listings. List up to 21 items for free every month.</li>
            </ul>
            <h2>Best practices</h2>
            <ul>
              <li>
                High-quality pictures encourage your customers' confidence.
              </li>
              <li>
                Include detailed product descriptions with brand names, styles,
                and model numbers. Make sure to include unique qualities and
                potential flaws.
              </li>
              <li>
                When you select item specifics for your listings, provide as
                many recommended item specifics as possible and choose from the
                options we provide.
              </li>
              <li>
                Increase your reach and share what you're listing with your
                friends and family.
              </li>
            </ul>
            <h2>Fees</h2>
            <p>
              Lioneus fee is structured so that you can focus on what you do
              best. We only charge payment processing fees which are 2.9% + $0.30 per successful card charge. For more information about the fee —{" "}
              <a href="mailto:info@lioneus.com"> Contact Us.</a>
            </p>
          </div>
        </div>
      </HelpStyle>
      <Footer />
    </React.Fragment>
  );
};

export default Help;
