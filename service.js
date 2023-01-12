import { contacts } from "./data.js";
import nanoid from "nanoid";

const ContactService = {
  getContacts: () => {
    return contacts;
  },
  find: (id) => contacts.find((user) => user.id === id),
  save: (nom, telephone) => {
    const id = nanoid();
    const contact = { id, nom, telephone };
    contacts.push(contact);
    return contact;
  },
};

export { ContactService };
