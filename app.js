//const express = require("express");
import express from "express";
import { contacts } from "./contacts.js";
const app = express();

app.get("/", function (req, res) {
  res.send("Hello World");
});

app.get("/api/contacts", function (req, res) {
  res.status(200).json(contacts);
});

app.get("/api/contacts/:id", function (req, res) {
  const id = req.params.id;
  var contact = contacts.find((user) => user.id === id);
  res.status(200).json(contact);
});

//module.exports = app; //Common JS

export default app;
