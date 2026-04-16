require('dotenv').config();
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const express = require("express");
const app = express();

app.use(express.json());

app.post("/payment-success", (req, res) => {

    const email = req.body.email;

    const token = Math.random().toString(36).substring(2);

    const link = `https://gaellevesque535-ops.github.io/nexxguardproxl/download.html?access=${token}`;

    console.log("NOUVEAU CLIENT:", email);
    console.log("ACCES:", link);

    // ici tu peux envoyer email plus tard

    res.send({ link });
});

