express = require("express")
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// TODO: Incoming messages route
app.post("/incoming-messages", (req, res) => {
  const data = req.body;
  console.log(`Received message: \n ${data}`);
  res.sendStatus(200);
});

// TODO: Delivery reports route

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`App running on port: ${port}`);
});
