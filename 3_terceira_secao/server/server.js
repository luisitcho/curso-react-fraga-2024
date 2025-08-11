import express from "express";
import fetch from "node-fetch";
import cors from "cors";

const app = express();
app.use(cors());

app.get("/api/coins", async (req, res) => {
  try {
    const queryString = new URLSearchParams(req.query).toString();
    const url = `https://rest.coincap.io/v3/assets${
      queryString ? `?${queryString}` : ""
    }`;

    const response = await fetch(url, {
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer cb8847d74b09e0556d44d6ee384ba8575735746465d8de7b0f7e2f65b9c1f93a",
      },
    });

    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error("Erro na API CoinCap:", error);
    res.status(500).json({ error: "Erro ao buscar dados" });
  }
});

app.listen(3001, () => {
  console.log("Servidor Node rodando em http://localhost:3001");
});
