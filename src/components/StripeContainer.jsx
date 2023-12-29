import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from "@stripe/react-stripe-js";
import PaymentForm from "./PaymentForm"

/*const PUBLIC_KEY = "pk_test_51OPn7lF3mzqYoQQBs5x3vWxpgMaJlP02nu7FiYVcOp9BFNlmGhlmJB2C6a3a6WoXLGeLEni4wvGfaAQhVTG1bEnY00kX0PrBz4";*/
const PUBLIC_KEY = "pk_live_51OPn7lF3mzqYoQQBXc7AidzvypmLPdHw3RyUhXjdGkE9rCDev72PgoKcARkknfOP0j3hpUh5vLj7PjW7DkeAowff00D7ewm2x6";

const Stripe = loadStripe(PUBLIC_KEY);

export default function StripeContainer() {
    return (
        <div className="StripeContainer" >
        <Elements stripe={Stripe}>
            <PaymentForm />
        </Elements>
        </div>
    )
}
