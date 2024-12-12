const PORT = process.env.PORT || 8000;
import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import posts from "./routes/posts.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// setup static folder
app.use(express.static(path.join(__dirname, "public")));

// Routes
app.use("/api/posts", posts);

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
