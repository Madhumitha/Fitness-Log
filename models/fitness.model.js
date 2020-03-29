module.exports = (sequelize, DataTypes) => {
  const Fitness = sequelize.define("fitness", {
    typeofFitness: {
      type: DataTypes.STRING
    },
    description: {
      type: DataTypes.STRING
    },
    hoursSpent: {
      type: DataTypes.INTEGER
    },
    date: {
      type: DataTypes.DATE
    },
    message: {
      type: DataTypes.STRING
    }
  });

  return Fitness;
};
