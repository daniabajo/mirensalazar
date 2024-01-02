import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from "@stripe/react-stripe-js";
import PaymentForm from "./PaymentForm"

/*const PUBLIC_KEY = "xxx";*/
const PUBLIC_KEY = "xxx";

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
