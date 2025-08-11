const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("<h1>It works 🎉</h1>");
});

app.get("/health", (req, res) => {
  res.json({ ok: true });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});
