import React from "react";

import refund from "./refund.module.css";

const Refund = () => {
  return (
    <div className={refund.mainContainer}>
      <h1>Return Policy</h1>
      <h4>Last updated May 03, 2023</h4>
      <p>
        Thank you for your purchase. We hope you are happy with your purchase.
        However, if you are not completely satisfied with your purchase for any
        reason, you may return it to us for a full refund or an exchange .
        Please see below for more information on our return policy.
      </p>
      <h3>RETURNS</h3>
      <p>
        All returns must be postmarked within five (5) days of the purchase
        date. All returned items must be in new and unused condition, with all
        original tags and labels attached.
      </p>
      <h3>RETURN PROCESS</h3>
      <p>
        To return an item, please email customer service at support@wayyeasy.in
        to obtain a Return Merchandise Authorisation (RMA) number. After
        receiving a RMA number, place the item securely in its original
        packaging and include your proof of purchase, then mail your return to
        the following address:
      </p>
      <hr />
      <p>Return shipping charges will be paid or reimbursed by us. </p>
      <h3>REFUNDS</h3>
      <p>
        After receiving your return and inspecting the condition of your item,
        we will process your return or exchange . Please allow at least five (5)
        days from the receipt of your item to process your return or exchange .
        We will notify you by email when your return has been processed.
      </p>
      <h3>EXCEPTIONS</h3>
      <p>
        For defective or damaged products, please contact us at the contact
        details below to arrange a refund or exchange.
      </p>
      <h4>Please Note</h4>
      <ul>
        <li>Sale items are FINAL SALE and cannot be returned.</li>
      </ul>
      <h3>QUESTIONS</h3>
      <p>
        If you have any questions concerning our return policy, please contact
        us at:
      </p>
      <p>9748976922</p>
      <p>support@wayyeasy.in</p>
    </div>
  );
};

export default Refund;
