require("dotenv").config();

// Dependencies
const express = require("express");
const next = require("next");
const bodyParser = require("body-parser");
const path = require("path");
const cors = require("cors");

// Next framework
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

// Database setup
const db = require("./models");
const serverPORT = 3000;
const PORT = process.env.PORT || serverPORT;

app
  .prepare()
  .then(() => {
    const server = express();
    require("./routes/fitness.routes")(server);

    var corsOptions = {
      origin: "http://localhost:8081"
    };

    server.use(cors(corsOptions));

    // Express middleware that allows POSTing data
    server.use(bodyParser.urlencoded({ extended: true }));
    server.use(bodyParser.json());

    // Connect to next framework
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
