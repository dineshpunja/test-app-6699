const app = require("../app");
// const { request } = require('supertest');
const request = require("supertest");
//const request = supertest(app);

const mongoose = require("mongoose");
// Configuration keys
const keys = require("../config/keys");

// befor testing do all needed
beforeAll(async () => {
  await mongoose
    .connect(keys.mongoURI, {
      useNewUrlParser: true,
      useCreateIndex: true,
    })
    .then(() => console.log("DB Connected"));
});

// before closing all the tests do all needed.
afterAll(async () => {
  await mongoose.connection.close();
});

describe("Make tests for the each Rest API", () => {
  test("root / api, should return 200 status code i", async () => {
    const response = await request(app).get("/");
    expect(response.statusCode).toBe(200);
  });

  test("POST api /get-req-data, with valid parameters", async () => {
    const response = await request(app).post("/get-req-data").send({
      // all valid correct parameters.
      startDate: "2015-01-01",
      endDate: "2015-03-01",
      minCount: 200,
      maxCount: 500,
    });
    //console.log(response);
    expect(response.statusCode).toBe(200);
    //done();
  }); //.catch(done);

  test("POST api /get-req-data, with invalid parameters", async () => {
    const response = await request(app).post("/get-req-data").send({
      startDate: "2015-01-01",
      endDate: "03-01", // invalid parameter
      minCount: 200,
      maxCount: 500,
    });
    //console.log(response);
    expect(response.statusCode).toBe(400);
    //done();
  }); //.catch(done);
});
