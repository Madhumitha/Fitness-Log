import nextConnect from "next-connect";
const fit = require("../../../controllers/fitness.controller");
const handler = nextConnect();

handler
  .get(fit.findAll)
  .post(fit.create)
  .delete(fit.deleteAll);

export default handler;
