import express from 'express'
import mongoose from "mongoose"
import Item from "../models/item.model"

// app.get('https://dragons-brew-cafe-serverless-apis.vercel.app/api/cart', async (req, res) => {
//     res.status(200).json( {message: "We are getting the cart items successfully!"} );
// });

module.exports = async (req, res) => {

    res.setHeader('Access-Control-Allow-Origin', '*');  // Allow all origins (be more specific in production)
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, DELETE'); // Allowed HTTP methods
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');  // Allowed headers

    if (req.method === 'GET') {
        res.status(200).json( {message: "We are getting the cart items successfully!"} );
    }
}

// export const getItems = async (req, res) => {
//     console.log("Cart GET API entered")
//     res.send("We are getting the cart items successfully!");
//     try {
//         // this grabs all Item objects from the database
//         const items = await Item.find({})

//         // **** newly added code ****
//         if (items === null) res.status(204).json({ success: true, data: items})

//         res.status(200).json({ success: true, data: items })
//     } catch (error) {
//         console.log("Error in fetching cart items:", error.message)
//         res.status(500).json({ success: false, message: "Server Error" })
//     }
// }