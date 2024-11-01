require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { paymentRoute } = require("./routes/payment.route");
const app = express();

app.use(cors());

app.use(express.json());

app.use("/order", paymentRoute);

const port = 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
