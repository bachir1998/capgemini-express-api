//const express = require("express");
import express from "express";
import * as controller from "./controller.js";

const app = express();

app.get("/", function (req, res) {
  res.send("Hello World");
});

app.get("/api/contacts", controller.getContacts);

app.get("/api/contacts/:id", controller.getContact);
//module.exports = app; //Common JS

export default app;
