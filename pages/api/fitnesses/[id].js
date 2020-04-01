import nextConnect from "next-connect";
const fitnesses = require("../../../controllers/fitness.controller");
const handler = nextConnect();
 
handler
  .get(fitnesses.findOne)
  .put(fitnesses.update)
  .delete(fitnesses.delete);

export default handler;
