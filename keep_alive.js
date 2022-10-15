const express = require('express');
const app = express();
const port = 3000;
app.get("/", (req, res) => {
  res.send("Bot saran telah aktif coy\n Developer by Near Hoshinova")
});
app.listen(port, () => console.log(`Bot running on http://localhost:${port}`));