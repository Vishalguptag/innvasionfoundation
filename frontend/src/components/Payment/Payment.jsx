import React, { useEffect, useState } from "react";

import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm.jsx";
import { loadStripe } from "@stripe/stripe-js";

function Payment({frmData, isPaymentForm}) {
  const [stripePromise, setStripePromise] = useState(null);
  const [clientSecret, setClientSecret] = useState("");
  console.log("frmData", frmData);

  useEffect(() => {
    fetch("http://localhost:5252/config").then(async (r) => {
      const { publishableKey } = await r.json();
      setStripePromise(loadStripe(publishableKey));
    });
  }, [isPaymentForm]);

  useEffect(() => {
    fetch("http://localhost:5252/create-payment-intent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(frmData),
    }).then(async (result) => {
      var { clientSecret } = await result.json();
      setClientSecret(clientSecret);
    });
  }, [isPaymentForm]);

  return ( isPaymentForm &&
    <>
      <h1>You Can Support Us By Donation</h1>
      {!stripePromise && <h3>please wait while we are preparing your request</h3>}
      {clientSecret && stripePromise && (
        <Elements stripe={stripePromise} options={{ clientSecret }}>
          <CheckoutForm  />
        </Elements>
      )}
    </>
  );
}

export default Payment;