const PORT = 8000;
const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

const username = "username";
const password = "password";

app.get("/deals", async (req, res) => {
  try {
    const body = {
      source: "amazon_seach",
      domain: "de",
      query: "deal of the day",
      parse: true,
      pages: 1,
    };
    const response = await fetch("https://realtime.oxylabs.io/v1/queries", {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Basic " + Buffer.from(`${username}:${password}`).toString("base64"),
      },
    });

    const data = await response.json();
    const results = data.results[0].content.results.organic;
    const filteredDeals = results.filter((deal) => deal.price_strikethrough);
    const sortedByBestDeal = filteredDeals.sort(
      (a, b) =>
        ((a.price_strikethrough - a.price) / a.price_strikethrough) * 100 -
        ((b.price_strikethrough - b.price) / b.price_strikethrough) * 100
    );
    console.log(await response.json());
    res.send(data);
  } catch (e) {
    console.error(err);
  }
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
