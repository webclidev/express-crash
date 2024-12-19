import express from "express";
const router = express.Router();

let posts = [
  { id: 1, title: "Shiv Shankar" },
  { id: 2, title: "Parvati" },
];

router.get("/", (req, res) => {
  const limit = parseInt(req.query.limit);

  if (!isNaN(limit) && limit > 0) {
    res.status(200).json(posts.slice(0, limit));
  } else {
    res.status(200).json(posts);
  }
});

router.get("/:id", (req, res) => {
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

// Create new post
router.post("/", (req, res) => {
  if (!req.body.title) {
    return res.status(400).json({ message: "Please include a title" });
  }

  posts.push({
    id: posts.length + 1,
    title: req.body.title,
  });

  res.status(201).json(posts);
});

export default router;
