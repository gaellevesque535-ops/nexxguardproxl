npm install stripe dotenv
require('dotenv').config();
const express = require('express');
const app = express();

app.use(express.json());

const Stripe = require('stripe');
const stripe = Stripe(process.env.STRIPE_SECRET_KEY);
app.post('/payment', async (req, res) => {
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: 1000, // 10.00$
      currency: 'usd',
      automatic_payment_methods: { enabled: true },
    });

    res.send({
      clientSecret: paymentIntent.client_secret,
    });

  } catch (error) {
    console.error(error);
    res.status(500).send('Erreur paiement');
  }
});
