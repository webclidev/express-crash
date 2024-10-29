const PORT = 8000;
const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Om Namah Shivay");
});

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
