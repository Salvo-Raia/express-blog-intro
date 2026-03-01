const express = require("express");
const app = express();
const port = 3000;
const appURL = `http://localhost:${port}`;

// Middleware assets statici
app.use(express.static("public"));

// Routes
app.get("/", (req, res) => {
  res.send("Server del mio blog");
});

// Creazione risposta
app.get("/bacheca", (req, res) => {
  const recipes = [
    {
      title: "Ciambellone classico",
      content: "...",
      img: "imgs/ciambellone.jpeg",
      tags: ["ciambellone", "ricetta", "dolce"],
    },
    {
      title: "Cracker di barbabietola",
      content: "...",
      img: "imgs/cracker_barbabietola.jpeg",
      tags: ["cracker", "barbabietola", "fit", "healthy"],
    },
    {
      title: "Pane fritto dolce",
      content: "...",
      img: "imgs/pane_fritto_dolce.jpeg",
      tags: ["pane", "fritto", "dolce", "frittura"],
    },
    {
      title: "Pasta con barbabietole",
      content: "...",
      img: "imgs/pasta_barbabietola.jpeg",
      tags: ["pasta", "barbabietola", "health"],
    },
    {
      title: "Torta Paesana",
      content: "...",
      img: "imgs/torta_paesana.jpeg",
      tags: ["torta", "paesana", "tradizione", "dolce"],
    },
  ];

  res.json(recipes);
});

// Avvio server
app.listen(port, () => {
  console.log("App.js is listening on port:", port);
});
