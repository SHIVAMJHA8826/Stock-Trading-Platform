require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// Import your Mongoose models
const { HoldingsModel } = require("./model/HoldingsModel");
const { PositionsModel } = require("./model/PositionsModel");
const { OrdersModel } = require("./model/OrdersModel");
const { UserModel } = require("./model/UserModel");

const PORT = process.env.PORT || 3002;
const url = process.env.MONGO_URL;
const JWT_SECRET = process.env.JWT_SECRET || "your_super_secret_key_here";

const app = express();

// Middlewares
app.use(cors());
app.use(bodyParser.json());

// Route 1: Get all holdings
app.get("/allHoldings", async (req, res) => {
  try {
    const allHoldings = await HoldingsModel.find({});
    res.json(allHoldings);
  } catch (err) {
    console.error("Error fetching holdings:", err);
    res.status(500).json({ error: "Failed to fetch holdings" });
  }
});

// Route 2: Get all positions
app.get("/allPositions", async (req, res) => {
  try {
    const allPositions = await PositionsModel.find({});
    res.json(allPositions);
  } catch (err) {
    console.error("Error fetching positions:", err);
    res.status(500).json({ error: "Failed to fetch positions" });
  }
});

// Route 3: Get all orders
app.get("/allOrders", async (req, res) => {
  try {
    const allOrders = await OrdersModel.find({});
    res.json(allOrders);
  } catch (err) {
    console.error("Error fetching orders:", err);
    res.status(500).json({ error: "Failed to fetch orders" });
  }
});

// Route: Signup
app.post("/signup", async (req, res) => {
  try {
    const { email, username, password } = req.body;
    
    const existingUser = await UserModel.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: "Email already registered" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new UserModel({
      email,
      username,
      password: hashedPassword,
    });

    await newUser.save();
    res.status(201).json({ message: "User registered successfully!" });
  } catch (err) {
    console.error("Signup error:", err);
    res.status(500).json({ error: "Server error during signup" });
  }
});

// Route: Login
app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await UserModel.findOne({ email });
    if (!user) {
      return res.status(400).json({ error: "Invalid email or password" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ error: "Invalid email or password" });
    }

    const token = jwt.sign({ id: user._id, email: user.email }, JWT_SECRET, {
      expiresIn: "1d",
    });

    res.status(200).json({
      message: "Login successful",
      token,
      username: user.username,
    });
  } catch (err) {
    console.error("Login error:", err);
    res.status(500).json({ error: "Server error during login" });
  }
});

// Route 4: Place a new order and update holdings for both BUY and SELL
app.post("/newOrder", async (req, res) => {
  try {
    const { name, qty, price, mode } = req.body;
    const stockName = name.trim().toUpperCase();
    const quantity = Number(qty);
    const orderPrice = Number(price);

    // 1. Validation for SELL orders
    if (mode === "SELL") {
      const existingHolding = await HoldingsModel.findOne({ 
        name: { $regex: new RegExp("^" + stockName + "$", "i") } 
      });

      if (!existingHolding) {
        return res.status(400).json({ error: "You do not own this stock!" });
      }

      if (existingHolding.qty < quantity) {
        return res.status(400).json({ error: "You cannot sell more quantity than you currently own!" });
      }
    }

    // 2. Save the order to the Orders collection
    const newOrder = new OrdersModel({
      name: stockName,
      qty: quantity,
      price: orderPrice,
      mode,
    });
    await newOrder.save();

    // 3. Update Holdings based on mode
    if (mode === "BUY") {
      const existingHolding = await HoldingsModel.findOne({ 
        name: { $regex: new RegExp("^" + stockName + "$", "i") } 
      });

      if (existingHolding) {
        const totalQty = existingHolding.qty + quantity;
        const totalCost = (existingHolding.qty * existingHolding.avg) + (quantity * orderPrice);
        const newAvg = totalCost / totalQty;

        existingHolding.qty = totalQty;
        existingHolding.avg = newAvg;
        existingHolding.price = orderPrice;
        
        await existingHolding.save();
      } else {
        const newHolding = new HoldingsModel({
          name: stockName,
          qty: quantity,
          avg: orderPrice,
          price: orderPrice,
          net: "+0.00%",
          day: "+0.00%",
        });
        await newHolding.save();
      }
    } else if (mode === "SELL") {
      const existingHolding = await HoldingsModel.findOne({ 
        name: { $regex: new RegExp("^" + stockName + "$", "i") } 
      });

      if (existingHolding) {
        const remainingQty = existingHolding.qty - quantity;

        if (remainingQty <= 0) {
          await HoldingsModel.deleteOne({ _id: existingHolding._id });
        } else {
          existingHolding.qty = remainingQty;
          existingHolding.price = orderPrice;
          await existingHolding.save();
        }
      }
    }

    res.status(201).json({ message: "Order placed and holdings updated successfully!" });
  } catch (err) {
    console.error("Error processing order:", err);
    res.status(500).json({ error: "Failed to process order" });
  }
});

// Connect Database and Start Server
mongoose
  .connect(url)
  .then(() => {
    console.log("DB connected successfully!");
    app.listen(PORT, () => {
      console.log(`Server listening on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Database connection error:", err);
  });