require("dotenv").config();
const customAuthMiddleware = require("./middleware/custom-auth-middleware");
const express = require("express");
const next = require("next");
const bodyParser = require("body-parser");
const path = require("path");
const cookieParser = require("cookie-parser");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

// directory references
const clientDir = path.join(__dirname, "../client");

// Database setup
const db = require("./models");
const PORT = process.env.PORT || 3000;

app
  .prepare()
  .then(() => {
    const server = express();

    // Express middleware that allows POSTing data
    server.use(bodyParser.urlencoded({ extended: true }));
    server.use(bodyParser.json());

    // use the cookie-parser to help with auth token,
    // it must come before the customAuthMiddleware
    server.use(cookieParser());
    server.use(customAuthMiddleware);

    // serve up the public folder so we can request static
    // assets from the client
    server.use(express.static(`${clientDir}/public`));

    server.get("*", (req, res) => {
      return handle(req, res);
    });

    server.get("/p/:id", (req, res) => {
      const actualPage = "/post";
      const queryParams = { id: req.params.id };
      app.render(req, res, actualPage, queryParams);
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
