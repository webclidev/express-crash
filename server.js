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
  const limit = parseInt(req.query.limit);

  if (!isNaN(limit) && limit > 0) {
    res.status(200).json(posts.slice(0, limit));
  } else {
    res.status(200).json(posts);
  }
});

app.get("/api/posts/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const post = posts.find((post) => post.id === id);

  if (!post) {
    res
      .status(404)
      .json({ message: `A post with the id of ${id} was not found` });
  } else {
    res.status(200).json(post);
  }
});

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
