import nextConnect from "next-connect";
const fitnesses = require("../../../controllers/fitness.controller");
const handler = nextConnect();
 
handler
  .get(fitnesses.findAll)
  .post(fitnesses.create)
  .delete(fitnesses.deleteAll);

export default handler;
