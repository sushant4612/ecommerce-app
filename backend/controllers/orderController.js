import orderModel from '../models/orderModel.js'
import userModel from '../models/userModel.js'
import Stripe from 'stripe'

// global variables
const currency = 'inr'
const deliverCharges = 10

// gateway initialize
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// Placing order using COD method
const placeOrder = async (req, res) => {
    try {
        const { userId, items, amount, address } = req.body;

        const orderData = {
            userId,
            items,
            amount,
            address,
            paymentMethod: "COD",
            payment:false,
            date: Date.now()
        }

        const newOrder = new orderModel(orderData);
        await newOrder.save();

        await userModel.findByIdAndUpdate(userId, {cartData: {}})

        res.json({success: true, message: "Order Placed"})
    } catch (error) {
        console.log(error);
        res.json({success: false, message: error.message})
    }
}

// Placing order using Stripe method
const placeOrderStripe = async (req, res) => {
    try {
        const { userId, items, amount, address } = req.body;
        const { origin } = req.headers;

        const orderData = {
            userId,
            items,
            amount,
            address,
            paymentMethod: "Stripe",
            payment:false,
            date: Date.now()
        }

        const newOrder = new orderModel(orderData);
        await newOrder.save();

        const line_items = items.map((item) => ({
            price_data: {
                currency,
                product_data: {
                    name: item.name
                },
                unit_amount: item.price * 100
            },
            quantity: item.quantity
        }))
        
        line_items.push(
            {
                price_data: {
                    currency,
                    product_data: {
                        name: 'Delivery Charges'
                    },
                    unit_amount: deliverCharges * 100
                },
                quantity: 1
            }
        )

        const session = await stripe.checkout.sessions.create({
            success_url: `${origin}/verify?success=true&orderId=${newOrder._id}`,
            cancel_url: `${origin}/verify?success=false&orderId=${newOrder._id}`,
            line_items,
            mode: 'payment',
        })

        res.json({success: true, session_url: session.url})
    } catch (error) {
        console.log(error);
        res.json({success: false, message: error.message})
    }
}

// Placing order using Razorpay method
const placeOrderRazorpay = async (req, res) => {

}

// All Orders Data for Admin Panel
const allOrders = async (req, res) => {
    try {
        const orders = await orderModel.find({})
        res.json({success: true, orders})
    } catch (error) {
        console.log(error);
        res.json({success: false, message: error.message})
    }
}

// User Order Dara for Frontend
const userOrders = async (req, res) => {
    try {
        const {userId} = req.body;

        const order = await orderModel.find({userId})

        res.json({success: true, order})
    } catch (error) {
        console.log(error);
        res.json({success: false, message: error.message})
    }
}

// Update order status from Admin Panel
const updateStatus = async (req, res) => {
    try {
        const {orderId, status} = req.body;
        await orderModel.findByIdAndUpdate(orderId, { status })

        res.json({success: true, message: 'Status Updated'})
    } catch (error) {
        console.log(error);
        res.json({success: false, message: error.message})
    }
}

export {placeOrder, placeOrderRazorpay, placeOrderStripe, allOrders, userOrders, updateStatus}