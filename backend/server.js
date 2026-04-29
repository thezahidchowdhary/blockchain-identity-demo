const express = require("express");
const cors = require("cors");
const crypto = require("crypto");

const app = express();
app.use(cors());
app.use(express.json());

const identities = {};

// hash function
function hashData(data) {
  return crypto.createHash("sha256").update(data).digest("hex");
}

// register route
app.post("/register", (req, res) => {
  const { name, aadhar, phone } = req.body;

  const hash = hashData(aadhar);

  if (identities[hash]) {
    return res.json({ success: false, message: "Duplicate identity detected!" });
  }

  identities[hash] = { name, aadhar, phone };

  res.json({ success: true, message: "Identity registered!" });
});

// ✅ IMPORTANT PART
const PORT = process.env.PORT || 10000;

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});