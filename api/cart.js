import express from 'express'
import mongoose from "mongoose"
import Item from "../models/item.model"

export default function handler(req, res) {
    return res.json({ message: `We are inside our cart api!`})
}

// app.get('/api/cart', async (req, res) => {
//     res.status(200).json( {message: "We are getting the cart items successfully!"} );
// });

// module.exports = async (req, res) => {

//     res.status(200).json( {message: "We are getting the cart items successfully!"} );

//     res.setHeader('Access-Control-Allow-Origin', '*');  // Allow all origins (be more specific in production)
//     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS'); // Allowed HTTP methods
//     res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');  // Allowed headers
    
//     // Handle preflight OPTIONS request (CORS preflight)
//     if (req.method === 'OPTIONS') {
//       res.status(200).end();  // Respond immediately to preflight request
//       return;
//     }

//     if (req.method === 'GET') {
//         res.status(200).json( {message: "We are getting the cart items successfully!"} );
//     }
// }

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