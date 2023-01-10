//const express = require("express");
import express from "express";
import * as controller from "./controller.js";
import bodyParser from "body-parser";

const app = express();
app.use(bodyParser.json());

app.get("/", function (req, res) {
  res.send("Hello World");
});

app.get("/api/contacts", controller.getContacts);

app.get("/api/contacts/:id", controller.getContact);

app.post("/api/addcontact", controller.addContact);
//module.exports = app; //Common JS

export default app;
