import express from "express";
import cors from "cors";
import { connect, Schema, model } from "mongoose";
import bodyParser from "body-parser";

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB connection
async function main() {
  try {
    await connect("mongodb://127.0.0.1:27017/WebDevWizards");
    console.log("DB connected...");
  } catch (err) {
    console.error("DB connection error:", err);
  }
}
main();

// Define User Schema
const userSchema = new Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

const WebDevWizardUsers = model("WebDevWizardUsers", userSchema);

// Registration endpoint
app.post("/webdevwizardusers/register", async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if user already exists
    const existingUser = await WebDevWizardUsers.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists." });
    }

    // Save user to database
    const newUser = new WebDevWizardUsers({ email, password });
    await newUser.save();

    res.status(201).json({ message: "Registration successful", user: newUser });
  } catch (err) {
    console.error("Error during registration:", err);
    res.status(500).send(err.message);
  }
});

// Login endpoint
app.post("/webdevwizardusers/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find user with matching email and password
    const user = await WebDevWizardUsers.findOne({ email, password });
    if (user) {
      res.status(200).json({ message: "Login successful", user });
    } else {
      res.status(401).json({ message: "Invalid email or password" });
    }
  } catch (err) {
    console.error("Error during login:", err);
    res.status(500).send(err.message);
  }
});

// Fetch all users (for testing/debugging)
app.get("/webdevwizardusers", async (req, res) => {
  try {
    const users = await WebDevWizardUsers.find();
    res.json(users);
  } catch (err) {
    console.error("Error fetching users:", err);
    res.status(500).send(err.message);
  }
});

// Start the server
app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
