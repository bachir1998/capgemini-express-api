import { contacts } from "./data.js";

const ContactService = {
  find: (id) => contacts.find((user) => user.id === id),
};

export { ContactService };
