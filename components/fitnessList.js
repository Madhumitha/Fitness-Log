import React, { useState, useEffect } from "react";
import FitnessDataService from "../lib/service";
import FitnessOption from "../components/FitnessOption";
import { useHistory } from "react-router-dom";
import Link from "next/link";

const FitnessesList = () => {
  const [fitnesses, setFitnesses] = useState([]);
  const [currentFitness, setCurrentFitness] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [searchTypeofFitness, setSearchTypeofFitness] = useState("");

  useEffect(() => {
    retrieveFitnesses();
  }, []);

  const onChangeSearchTypeofFitness = e => {
    const searchTypeofFitness = e.target.value;
    setSearchTypeofFitness(searchTypeofFitness);
  };

  const retrieveFitnesses = () => {
    FitnessDataService.getAll()
      .then(response => {
        setFitnesses(response.data);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const refreshList = () => {
    retrieveFitnesses();
    setCurrentFitness(null);
    setCurrentIndex(-1);
  };

  const setActiveFitness = (fitness, index) => {
    setCurrentFitness(fitness);
    setCurrentIndex(index);
  };

  const removeAllFitnesses = () => {
    FitnessDataService.removeAll()
      .then(response => {
        console.log(response.data);
        refreshList();
      })
      .catch(e => {
        console.log(e);
      });
  };

  const findByTypeofFitness = () => {
    FitnessDataService.findByTitle(searchTypeofFitness)
      .then(response => {
        setFitnesses(response.data);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  function handleClick() {
    let history = useHistory();
    history.push("/option");
  }

  return (
    <div className="list row">
      <div className="col-md-8">
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Search by type of fitness"
            value={searchTypeofFitness}
            onChange={onChangeSearchTypeofFitness}
          />
          <div className="input-group-append">
            <button
              className="btn btn-outline-secondary btn-success"
              type="button"
              onClick={findByTypeofFitness}
            >
              Search
            </button>
          </div>
        </div>
      </div>
      <div className="col-md-6">
        <h4>Fitnesses List</h4>

        <ul className="list-group">
          {fitnesses &&
            fitnesses.map((fitness, index) => (
              <li
                className={"list-group-item " + (index === currentIndex ? "active" : "")}
                onClick={() => setActiveFitness(fitness, index)}
                key={index}
              >
                {fitness.typeOfFitness}
              </li>
            ))}
        </ul>

        <button className="m-3 btn btn-sm btn-danger" onClick={removeAllFitnesses}>
          Remove All
        </button>
      </div>
      <div className="col-md-6">
        {currentFitness ? (
          <div>
            <h4>Fitness</h4>
            <div>
              <label>
                <strong>Type of Fitness:</strong>
              </label>{" "}
              {currentFitness.typeOfFitness}
            </div>
            <div>
              <label>
                <strong>Description:</strong>
              </label>{" "}
              {currentFitness.description}
            </div>
            <div>
              <label>
                <strong>Hours Spent:</strong>
              </label>{" "}
              {currentFitness.hoursSpent}
            </div>
            <div>
              <label>
                <strong>Date:</strong>
              </label>{" "}
              {currentFitness.date}
            </div>
            <div>
              <label>
                <strong>Message:</strong>
              </label>{" "}
              {currentFitness.message}
            </div>
            <div>
              <label>
                <strong>Status:</strong>
              </label>{" "}
              {currentFitness.logged ? "Logged" : "Save"}
            </div>

            <Link href={"/fitnesses/" + currentFitness.id} className="badge badge-warning">
              <a onClick={handleClick}> Edit</a>
            </Link>
          </div>
        ) : (
          <div>
            <br />
          </div>
        )}
      </div>
    </div>
  );
};

export default FitnessesList;
