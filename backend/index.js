const express = require("express");
const app = express();
app.use(express.json());
const cors = require("cors")
const sequelize = require('./src/db/db.js');
const mainRoute = require("./src/routes/index.js")
app.use(
  cors({
    origin: process.env.ORIGINS,
    methods: ["GET", "POST", "DELETE", "UPDATE", "PUT", "PATCH"],
    allowedHeaders: ["Content-Type", "Authorization", "X-Custom-Header"],
  })
);
sequelize.sync();

app.use("/", mainRoute)

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log("listening on port" + port);
});
