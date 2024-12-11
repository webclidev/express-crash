const PORT = process.env.PORT || 8000;
const express = require("express");
const path = require("path");

const app = express();

// setup static folder
app.use(express.static(path.join(__dirname, "public")));

let posts = [
  { id: 1, title: "Shiv Shankar" },
  { id: 2, title: "Parvati" },
];

app.get("/api/posts", (req, res) => {
  res.json(posts);
});

app.get("/api/posts/:id", (req, res) => {
  const id = parseInt(req.params.id);
  res.json(posts.filter((post) => post.id === id));
});

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
