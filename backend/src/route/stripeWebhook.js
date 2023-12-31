// route/stripeWebhook.js

const express = require("express");
const router = express.Router();
const stripeController = require("../controller/ticketsController"); // Update the path as per your directory structure

// Route for handling Stripe webhook events
router.post("/webhook/stripe", stripeController.handleStripeWebhook);

module.exports = router;
