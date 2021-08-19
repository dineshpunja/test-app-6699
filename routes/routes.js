const controller = require("../controller/controller");
const parameterValidity = require("../middleware/parameterValidity");

module.exports = (app) => {
  // This is a route to make general test for root
  app.get("/", (req, res) => {
    return res.status(200).send("Server is running all ok!");
  });

  // Gets the requested data
  // parameterValidity.getReqData - middleware, checks parameter
  // controller.getRequestedData - fetches data and sends to client
  app.post(
    "/get-req-data",
    parameterValidity.getReqData,
    controller.getRequestedData
  );

  // created only to be used by jest
  app.post("/jestTest", (req, res) => {
    res.status(200).send("All OK");
  });
};
