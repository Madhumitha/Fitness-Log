module.exports = app => {
  const fitnesses = require("../controllers/fitness.controller.js");

  var router = require("express").Router();

  // Create a new Fitness Log
  router.post("/", fitnesses.create);

  // Retrieve all Fitness LOG
  router.get("/", fitnesses.findAll);

  // Retrieve a single fitness log with id
  router.get("/:id", fitnesses.findOne);

  // Update a fitness with id
  router.put("/:id", fitnesses.update);

  // Delete a fitness with id
  router.delete("/:id", fitnesses.delete);

  // Delete all fitness log
  router.delete("/", fitnesses.deleteAll);

  app.use("/api/fitnesses", router);
};
