const express = require("express");

const app = express();

app.get("/products", (req, res) => {
  res.send("lista de productos");
});

app.post("/products", (req, res) => {
  res.send("creanding productos");
});

app.put("/products", (req, res) => {
  res.send("actualianding productos");
});

app.delete("/products", (req, res) => {
  res.send("borranding productos");
});

app.patch("/products", (req, res) => {
  res.send("actualizanding medio producto productos");
});

app.get("/miarchivo", (req, res) => {
  res.sendFile("./img/s6CsqP.gif", {
    root: __dirname,
  });
});
app.listen(3000);
console.log(`Server on port ${3000}`);
