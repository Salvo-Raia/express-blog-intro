const express = require("express");
const app = express();
const port = 3000;
const appURL = `http://localhost:${port}`;

app.get("/", (req, res) => {
  res.send("Server del mio blog");
});

app.get("/bacheca", (req, res) => {
  const recipes = [
    {
      title: "Ciambellone classico",
      content: "",
      img: "",
      tags: ["ciambellone", "ricetta", "dolce"],
    },
    {
      title: "Cracker di barbabietola",
      content: "",
      img: "",
      tags: ["cracker", "barbabietola", "fit", "healthy"],
    },
    {
      title: "Pane fritto dolce",
      content: "",
      img: "",
      tags: ["pane", "fritto", "dolce", "frittura"],
    },
    {
      title: "Pasta con barbabietole",
      content: "",
      img: "",
      tags: ["pasta", "barbabietola", "health"],
    },
    {
      title: "Torta Paesana",
      content: "",
      img: "",
      tags: ["torta", "paesana", "tradizione", "dolce"],
    },
  ];
});

app.listen(port, () => {
  console.log("App.js is listening on port:", port);
});
