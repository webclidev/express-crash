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

router.get("/:id", (req, res, next) => {
  const id = parseInt(req.params.id);
  const post = posts.find((post) => post.id === id);

  if (!post) {
    const error = new Error(`A post with the id of ${id} was not found`);
    error.status = 404;
    return next(error);
  }

  res.status(200).json(post);
});

// Create new post
router.post("/", (req, res, next) => {
  if (!req.body.title) {
    const error = new Error("Please include a title");
    error.status = 400;
    return next(error);
  }

  posts.push({
    id: posts.length + 1,
    title: req.body.title,
  });

  res.status(201).json(posts);
});

// Update post
router.put("/:id", (req, res, next) => {
  const id = parseInt(req.params.id);
  const post = posts.find((post) => post.id === id);

  if (!post) {
    const error = new Error(`A post with the id of ${id} was not found`);
    error.status = 404;
    return next(error);
  }

  if (!req.body.title) {
    const error = new Error("Please include a title");
    error.status = 400;
    return next(error);
  }

  post.title = req.body.title;
  res.status(201).json(posts);
});

// Delete post
router.delete("/:id", (req, res, next) => {
  const id = parseInt(req.params.id);
  const post = posts.find((post) => post.id === id);

  if (!post) {
    const error = new Error(`A post with the id of ${id} was not found`);
    error.status = 404;
    return next(error);
  }

  posts = posts.filter((post) => post.id !== id);
  res.status(200).json(posts);
});

export default router;
