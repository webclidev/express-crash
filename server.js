const PORT = process.env.PORT || 8000;
const express = require("express");
const path = require("path");
const posts = require("./routes/posts");

const app = express();

// setup static folder
app.use(express.static(path.join(__dirname, "public")));

// Routes
app.use("/api/posts", posts);

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
