import React, { useState } from "react";
import FitnessDataService from "../lib/service";

const AddFitness = () => {
  const initialFitnessState = {
    id: null,
    typeOfFitness: "",
    description: "",
    hoursSpent: "",
    date: "",
    message: "",
    logged: false
  };
  const [fitness, setFitness] = useState(initialFitnessState);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setFitness({ ...fitness, [name]: value });
  };

  const saveFitness = () => {
    var data = {
      typeOfFitness: fitness.typeOfFitness,
      description: fitness.description,
      hoursSpent: fitness.hoursSpent,
      date: fitness.date,
      message: fitness.message
    };

    FitnessDataService.create(data)
      .then(response => {
        setFitness({
          id: response.data.id,
          typeOfFitness: response.data.typeOfFitness,
          description: response.data.description,
          hoursSpent: response.data.hoursSpent,
          date: response.data.date,
          message: response.data.message,
          logged: response.data.logged
        });
        setSubmitted(true);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const newFitness = () => {
    setFitness(initialFitnessState);
    setSubmitted(false);
  };

  return (
    <div className="submit-form">
      {submitted ? (
        <div>
          <h4>You submitted successfully!</h4>
          <button className="btn btn-success" onClick={newFitness}>
            Add
          </button>
        </div>
      ) : (
        <div>
          <div className="form-group">
            <label htmlFor="typeOfFitness">Type of Fitness: </label>
            <input
              type="text"
              className="form-control"
              id="typeOfFitness"
              required
              value={fitness.title}
              onChange={handleInputChange}
              name="typeOfFitness"
            />
          </div>

          <div className="form-group">
            <label htmlFor="description">Description</label>
            <input
              type="text"
              className="form-control"
              id="description"
              required
              value={fitness.description}
              onChange={handleInputChange}
              name="description"
            />
          </div>

          <div className="form-group">
            <label htmlFor="hoursSpent">Hours Spent</label>
            <input
              type="number"
              className="form-control"
              id="hoursSpent"
              required
              value={fitness.hoursSpent}
              onChange={handleInputChange}
              name="hoursSpent"
            />
          </div>

          <div className="form-group">
            <label htmlFor="date">Date</label>
            <input
              type="date"
              className="form-control"
              id="date"
              required
              value={fitness.date}
              onChange={handleInputChange}
              name="date"
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <input
              type="textarea"
              className="form-control"
              id="description"
              required
              value={fitness.message}
              onChange={handleInputChange}
              name="message"
            />
          </div>

          <button onClick={saveFitness} className="btn btn-success">
            Submit
          </button>
        </div>
      )}
    </div>
  );
};

export default AddFitness;
