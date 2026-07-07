const express = require("express");
const Razorpay = require("razorpay");
const cors = require("cors");
const crypto = require("crypto");
const path = require("path");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

// Serve your website files
app.use(express.static(__dirname));

// Home page
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

const razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET
});

// Create Razorpay Order
app.post("/create-order", async (req, res) => {
    try {
       const { amount } = req.body;

const order = await razorpay.orders.create({
    amount: amount ,
    currency: "INR",
    receipt: "ATR_" + Date.now()
});

        res.json(order);

    } catch (err) {
        console.error(err);
        res.status(500).json({ error: err.message });
    }
});

// Verify Payment
app.post("/verify-payment", (req, res) => {

    const {
        razorpay_order_id,
        razorpay_payment_id,
        razorpay_signature
    } = req.body;

    const body = razorpay_order_id + "|" + razorpay_payment_id;

    const expectedSignature = crypto
        .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
        .update(body)
        .digest("hex");

    if (expectedSignature === razorpay_signature) {
        return res.json({ success: true });
    }

    res.status(400).json({ success: false });
});

app.listen(3000, () => {
    console.log("🚀 Server running at http://localhost:3000");
});