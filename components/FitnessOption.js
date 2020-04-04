import React, { useState, useEffect } from "react";
import FitnessDataService from "../lib/service";

const Fitness = props => {
  const initialFitnessState = {
    id: null,
    typeOfFitness: "",
    description: "",
    hoursSpent: "",
    date: "",
    message: "",
    logged: false
  };
  const [currentFitness, setCurrentFitness] = useState(initialFitnessState);
  const [message, setMessage] = useState("");

  const getFitness = id => {
    FitnessDataService.get(id)
      .then(response => {
        setCurrentFitness(response.data);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  useEffect(() => {
    getFitness(props.match.params.id);
  }, [props.match.params.id]);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setCurrentFitness({ ...currentFitness, [name]: value });
  };

  const updateLogged = status => {
    var data = {
      id: currentFitness.id,
      typeOfFitness: currentFitness.typeOfFitness,
      description: currentFitness.description,
      hoursSpent: currentFitness.hoursSpent,
      date: currentFitness.date,
      message: currentFitness.message,
      logged: status
    };

    FitnessDataService.update(currentFitness.id, data)
      .then(response => {
        setCurrentFitness({ ...currentFitness, fitness: status });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const updateFitness = () => {
    FitnessDataService.update(currentFitness.id, currentFitness)
      .then(response => {
        console.log(response.data);
        setMessage("The fitness log was updated successfully!");
      })
      .catch(e => {
        console.log(e);
      });
  };

  const deleteFitness = () => {
    FitnessDataService.remove(currentFitness.id)
      .then(response => {
        console.log(response.data);
        props.history.push("/fitnesses");
      })
      .catch(e => {
        console.log(e);
      });
  };

  return (
    <div>
      {currentFitness ? (
        <div className="edit-form">
          <h4>Fitness</h4>
          <form>
            <div className="form-group">
              <label htmlFor="title">Type of Fitness</label>
              <input
                type="text"
                className="form-control"
                id="typeOfFitness"
                name="typeOfFitness"
                value={currentFitness.typeOfFitness}
                onChange={handleInputChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="description">Description</label>
              <input
                type="text"
                className="form-control"
                id="description"
                name="description"
                value={currentFitness.description}
                onChange={handleInputChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="hoursSpent">Hours Spent</label>
              <input
                type="number"
                className="form-control"
                id="hoursSpent"
                name="hoursSpent"
                value={currentFitness.hoursSpent}
                onChange={handleInputChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="date">Date</label>
              <input
                type="date"
                className="form-control"
                id="date"
                name="date"
                value={currentFitness.date}
                onChange={handleInputChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <input
                type="message"
                className="form-control"
                id="message"
                name="message"
                value={currentFitness.message}
                onChange={handleInputChange}
              />
            </div>

            <div className="form-group">
              <label>
                <strong>Status:</strong>
              </label>
              {currentFitness.logged ? "Logged" : "Pending"}
            </div>
          </form>

          {currentFitness.logged ? (
            <button className="badge badge-primary mr-2" onClick={() => updateLogged(false)}>
              Undo
            </button>
          ) : (
            <button className="badge badge-primary mr-2" onClick={() => updateLogged(true)}>
              Logged
            </button>
          )}

          <button className="badge badge-danger mr-2" onClick={deleteFitness}>
            Delete
          </button>

          <button type="submit" className="badge badge-success" onClick={updateFitness}>
            Update
          </button>
          <p>{message}</p>
        </div>
      ) : (
        <div>
          <br />
          <p>Please click on a Log...</p>
        </div>
      )}
    </div>
  );
};

export default Fitness;
