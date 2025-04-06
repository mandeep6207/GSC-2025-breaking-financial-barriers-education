const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());

const scholarships = [
  { name: "STEM Excellence", amount: "$5000" },
  { name: "Women in Tech", amount: "$3000" }
];

app.get("/scholarships", (req, res) => {
  res.json(scholarships);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
