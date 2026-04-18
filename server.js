require('dotenv').config();

const express = require('express');
const app = express();

const Stripe = require('stripe');
const stripe = Stripe(process.env.STRIPE_SECRET_KEY);

app.use(express.json());

app.post('/webhook', (req, res) => {

    const event = req.body;

    if (event.type === 'checkout.session.completed') {

        const session = event.data.object;

        const email = session.customer_details.email;

        const token = Math.random().toString(36).substring(2);

        const link = `https://gaellevesque535-ops.github.io/nexxguardproxl/download.html?access=${token}`;

        console.log("💰 Nouveau client :", email);
        console.log("🔗 Accès :", link);
    }

    res.sendStatus(200);
});

app.listen(3000, () => console.log("🚀 Server OK"));
