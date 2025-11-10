const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const authRoutes = require("./routes/authRoutes"); // ✅ no destructuring
const userRoutes = require("./routes/userRoutes"); // ✅ no destructuring

// db connection
const con = require("./config/db.js");
con();

// .env setup
dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api/auth", authRoutes); // ✅ these are now routers
app.use("/api/user", userRoutes);

app.listen(process.env.PORT, () =>
  console.log(`🚀 Server running on port ${process.env.PORT}`)
);
