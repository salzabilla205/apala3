const express = require("express");
const path = require("path");
const app = express();

let latestData = {
  current: "-",
  voltage: "-",
  temp: "-",
  hum: "-"
};

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

app.post("/api/data", (req, res) => {
  latestData = req.body;
  console.log("📩 Data diterima:", latestData);
  res.status(200).json({ message: "Data diterima" });
});

app.get("/api/data", (req, res) => {
  res.json(latestData);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server berjalan di http://localhost:${PORT}`);
});
