const express = require("express");
const dbConnect = require("./dbConnect");
const app = express();
app.use(express.json());
const path = require("path");

const userRoute = require("./routes/userRoute");
const transactionRoute = require("./routes/transactionRoute");

app.use("/api/users/", userRoute);
app.use("/api/transactions", transactionRoute);

const port = process.env.PORT || 5000;

if (process.env.NODE_ENV === "production") {
  app.use("/", express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client/build/index.html"));
  });
}

app.listen(port, () => console.log(`Server is running on port ${port}`));
