import { contacts } from "./data.js";

function getContacts(req, res) {
  res.status(200).json(contacts);
}

function getContact(req, res) {
  const id = req.params.id;
  var contact = contacts.find((user) => user.id === id);
  res.status(200).json(contact);
}

export { getContacts, getContact };
