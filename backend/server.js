require("dotenv").config();

const express = require("express");
const cors = require("cors");
const mysql = require("mysql2/promise");

const app = express();

app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.json());

const db = mysql.createPool({
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "",
  database: process.env.DB_NAME || "portfolio_db",
  port: Number(process.env.DB_PORT || 3306),
  waitForConnections: true,
  connectionLimit: 10
});

// Check that the API and database are working
app.get("/api/health", async (req, res) => {
  try {
    await db.query("SELECT 1");
    res.json({
      api: "ok",
      database: "connected"
    });
  } catch (error) {
    console.error("Database error:", error.message);
    res.status(500).json({
      api: "ok",
      database: "disconnected"
    });
  }
});

// Save contact form messages to MySQL
app.post("/api/contact", async (req, res) => {
  const { name, email, message } = req.body || {};

  if (
    typeof name !== "string" ||
    typeof email !== "string" ||
    typeof message !== "string" ||
    !name.trim() ||
    !email.trim() ||
    !message.trim()
  ) {
    return res.status(400).json({
      message: "Please fill in all fields."
    });
  }

  try {
    await db.execute(
      `INSERT INTO contact_messages (name, email, message)
       VALUES (?, ?, ?)`,
      [name.trim(), email.trim(), message.trim()]
    );

    res.status(201).json({
      message: "Your message was saved successfully!"
    });
  } catch (error) {
    console.error("Could not save message:", error.message);
    res.status(500).json({
      message: "Could not save your message."
    });
  }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Portfolio backend running at http://localhost:${PORT}`);
});