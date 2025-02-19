const express = require("express");
const app = express();
app.use(express.json());
const cors = require("cors")
const sequelize = require('./src/db/db.js');
// connectDB()
const mainRoute = require("./src/routes/index.js")
app.use(
  cors({
    origin: ["http://localhost:3000/","http://localhost:3000"],
    methods: ["GET", "POST", "DELETE", "UPDATE", "PUT", "PATCH"],
    allowedHeaders: ["Content-Type", "Authorization", "X-Custom-Header"],
    // allowedHeaders: ["Origin", "X-Requested-With", "Content-Type", "Accept"],
  })
);
sequelize.sync();

app.use("/", mainRoute)

const port = 5000;
app.listen(port, () => {
  console.log("listening on port" + port);
});
