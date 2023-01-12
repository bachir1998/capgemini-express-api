//const request = require("supertest")
//const app = require('../app.js')

import request from "supertest";
import app from "../app.js";

describe("Test the root path", () => {
  test("It should respond to the Get method", () => {
    request(app)
      .get("/")
      .then((response) => {
        expect(response.statusCode).toBe(200);
      });
  });

  test("Second test", () => {
    request(app)
      .get("/")
      .then((response) => {
        expect(response.statusCode).toBe(404);
      });
  });
});

describe("Test the api/contacts path", () => {
  test("should be return code status 200", () => {
    request(app)
      .get("/api/contacts")
      .then((response) => {
        expect(response.statusCode).toBe(200);
      });
  });
});

describe("Should return nom key in response ", () => {
  test("should test contacts", () => {
    request(app)
      .get("/api/contacts")
      .then((response) => {
        expect(response.statusCode).toBe(200);
        expect(response.body[0].nom).toBe("Basse");
      });
  });
});

describe("Should return id key in response ", () => {
  test("should be return 1 contact ", () => {
    request(app)
      .get("/api/contacts/" + 1)
      .then((response) => {
        expect(response.statusCode).toBe(200);
        expect(response.body.id).toBe("1");
        expect(response.body.nom).toBe("Bachir");
        expect(response.body.telephone).toBe("0989905678");
      });
  });
});

describe("Should return id key in response ", () => {
  test("should be return undefined contactid ", () => {
    request(app)
      .get("/api/contacts/" + 9)
      .then((response) => {
        expect(response.statusCode).toBe(200);
        expect(response.body.id).toBe(undefined);
      });
  });
});

describe("Should return id key in response ", () => {
  test("should be return new contact", async () => {
    await request(app)
      .post("/api/addcontact")
      .set("Content-type", "application/json")
      .send({ id: "3", nom: "Aazaoui", telephone: "0789567878" })
      .then((response) => {
        expect(response.statusCode).toBe(201);
      });
  });
});

/*
describe("Should return id key in response ", () => {
  test("",async()=>{
    const getContacts = jest.fn();
    service.getContacts = jest.fn(()=>{
      getContacts;
    });

    service.getContacts.mockReturnValue([{nom : "test"}]);
    const response = await request(app).get("/api/contacts");
    expect(response.body[0].nom).toBe("test");
  })

});

*/
