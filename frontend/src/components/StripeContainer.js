import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import React from 'react'
import PaymentForm from './PaymentForm'

const PUBLIC_KEY =
  'pk_test_51K6IJQB5OnvlhtIimji1uXUxV8S6AHtaxogATTN4oXsV6yEPToxCmxfq25eP28CUNIKw1FhqVwFAD0H78Ajcb3Fj00gYZf5paT'

const stripeTestPromise = loadStripe(PUBLIC_KEY)

export default function StripeContainer() {
  return (
    <Elements stripe={stripeTestPromise}>
      <PaymentForm />
    </Elements>
  )
}
