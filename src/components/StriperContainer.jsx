import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from "@stripe/react-stripe-js";
import PaymentForm from "./PaymentForm"

const PUBLIC_KEY = "pk_test_51OPn7lF3mzqYoQQBs5x3vWxpgMaJlP02nu7FiYVcOp9BFNlmGhlmJB2C6a3a6WoXLGeLEni4wvGfaAQhVTG1bEnY00kX0PrBz4";
const Stripe = loadStripe(PUBLIC_KEY);

export default function StriperContainer() {
    return (
        <Elements stripe={Stripe}>StriperContainer
            <PaymentForm />
        </Elements>
    )
}
