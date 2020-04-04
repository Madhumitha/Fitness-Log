module.exports = (sequelize, Sequelize) => {
  const Fitness = sequelize.define("fitnesses", {
    typeOfFitness: {
      type: Sequelize.STRING
    },
    description: {
      type: Sequelize.STRING
    },
    hoursSpent: {
      type: Sequelize.INTEGER
    },
    date: {
      type: Sequelize.DATE
    },
    message: {
      type: Sequelize.STRING
    },
    logged: {
      type: Sequelize.BOOLEAN
    }
  });

  return Fitness;
};
