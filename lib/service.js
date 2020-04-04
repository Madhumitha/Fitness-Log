import http from "./http-common";

const getAll = () => {
  return http.get("/fitnesses");
};

const get = id => {
  return http.get(`/fitnesses/${id}`);
};

const create = data => {
  return http.post("/fitnesses", data);
};

const update = (id, data) => {
  return http.put(`/fitnesses/${id}`, data);
};

const remove = id => {
  return http.delete(`/fitnesses/${id}`);
};

const removeAll = () => {
  return http.delete(`/fitnesses`);
};

const findByTitle = typeOfFitness => {
  return http.get(`/fitnesses?typeOfFitness=${typeOfFitness}`);
};

export default {
  getAll,
  get,
  create,
  update,
  remove,
  removeAll,
  findByTitle
};
