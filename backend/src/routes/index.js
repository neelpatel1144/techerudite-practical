const express = require('express');
const app = express();
const authRoute = require('./user/auth-route');

app.use("/user", authRoute)

module.exports = app