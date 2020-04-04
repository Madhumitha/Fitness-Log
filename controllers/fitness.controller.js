const db = require("../models");

const Fitness = db.fitnesses;
const Op = db.Sequelize.Op;

// Create and Save a new fitness log
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty"
    });
    return;
  }

  // Create a fitness log
  const fitness = {
    typeOfFitness: req.body.typeOfFitness,
    description: req.body.description,
    hoursSpent: req.body.hoursSpent,
    date: req.body.date,
    message: req.body.message,
    logged: req.body.logged ? req.body.logged : false
  };

  // Save a fitness log
  Fitness.create(fitness)

    .then(data => {
      console.log(data.typeOfFitness);
      res.send(data);
    })
    .catch(err => {
      console.log(err);
      res.status(500).send({
        message: err.message || "Some error occured while creating the Fitness Log "
      });
    });
};

// Retrieve all fitness log from the da\tabase.
exports.findAll = (req, res) => {
  console.log("Here in get method");
  const typeOfFitness = req.query.typeOfFitness;
  let condition = typeOfFitness ? { typeOfFitness: { [Op.like]: `%${typeOfFitness}%` } } : null;

  Fitness.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Some error occured while retrieving tutorial"
      });
    });
};

// Find a single fitness log with an id
exports.findOne = (req, res) => {
  const id = req.params.id;
  console.log("id is : " + id);
  Fitness.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Fitness with id=" + id
      });
    });
};

// Update a fitness log by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Fitness.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Fitness was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Fitness with id=${id}. Maybe Fitness was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Fitness with id=" + id
      });
    });
};

// Delete a fitness log with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Fitness.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Fitness was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Fitness with id=${id}. Maybe Fitness was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Fitness with id=" + id
      });
    });
};

// Delete all fitness log from the database.
exports.deleteAll = (req, res) => {
  Fitness.destroy({
    where: {},
    truncate: false
  })
    .then(data => {
      res.send({ message: `${data} Fitness were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Some error occurred while removing all fitness."
      });
    });
};

// Find all logged Fitness
exports.findAllLogged = (req, res) => {
  Fitness.findAll({ where: { logged: true } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Some error occured while retrieving log"
      });
    });
};
