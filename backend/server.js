const express = require("express");
const cors = require("cors");
const crypto = require("crypto");

const app = express();

app.use(cors());
app.use(express.json());

// ✅ ADD THIS (VERY IMPORTANT)
app.get("/", (req, res) => {
  res.send("Backend is running ✅");
});

const identities = {};

function hashData(data) {
  return crypto.createHash("sha256").update(data).digest("hex");
}

app.post("/register", (req, res) => {
  const { name, aadhar, phone } = req.body;

  const hash = hashData(aadhar);

  if (identities[hash]) {
    return res.json({ success: false, message: "Duplicate identity detected!" });
  }

  identities[hash] = { name, aadhar, phone };

  res.json({ success: true, message: "Identity registered!" });
});

app.listen(5001, () => {
  console.log("Server running on http://localhost:5001");
});