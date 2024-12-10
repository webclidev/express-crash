const PORT = 8000;
const express = require("express");
const path = require("path");

const app = express();

// setup static folder
app.use(express.static(path.join(__dirname, "public")));

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
