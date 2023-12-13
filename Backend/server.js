const express = require("express");
const cors = require("cors");
const app = express();
const port = 8000;
app.use(cors());
app.get("/test", (req, res) => {
  res.json({ text: "this is from the backend" });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
