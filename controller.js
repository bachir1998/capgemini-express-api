import app from "./app.js";
import * as service from "./service.js";

function getContacts(req, res) {
  res.status(200).json(service.ContactService.getContacts());
}

function getContact(req, res) {
  const id = req.params.id;
  const contact = service.ContactService.find(id); //contacts.find((user) => user.id === id);
  res.status(200).json(contact);
}

function addContact(req, res) {
  try {
    const { nom, telephone } = req.body;
    const newContact = service.ContactService.save(nom, telephone);
    res.status(201).json(newContact);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

export { getContacts, getContact, addContact };
