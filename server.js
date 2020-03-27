require("dotenv").config();
const express = require("express");
const next = require("next");
const bodyParser = require("body-parser");
const path = require("path");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

// directory references
const clientDir = path.join(__dirname, "../client");

// Database setup
const db = require("./models");
const PORT = process.env.PORT || 3000;

// Routes

app
  .prepare()
  .then(() => {
    const server = express();

    // Express middleware that allows POSTing data
    server.use(bodyParser.urlencoded({ extended: true }));
    server.use(bodyParser.json());

    // serve up the public folder so we can request static
    // assets from the client
    server.use(express.static(`${clientDir}/public`));

    server.get("*", (req, res) => {
      return handle(req, res);
    });

    db.sequelize.sync({ force: true }).then(() => {
      server.listen(PORT, () => {
        console.log(`Listenting on : http://localhost:${PORT}`);
      });
    });
  })
  .catch(ex => {
    console.error(ex.stack);
    process.exit(1);
  });
