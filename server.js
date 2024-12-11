const PORT = 8000;
const express = require("express");
const path = require("path");

const app = express();

// setup static folder
app.use(express.static(path.join(__dirname, "public")));

app.get("/api/posts", (req, res) => {
  res.json([{ id: 1, title: "Shiv Shankar" }]);
});

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
