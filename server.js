const express = require("express");
const helmet = require("helmet");
const server = express();

const projectRouter = require("./routers/projectRouter");
const actionsRouter = require("./routers/actionsRouter");

server.use(express.json());
server.use(helmet());

server.use("/api/project", projectRouter);
server.use("/api/actions", actionsRouter);

server.get("/", (req, res) => {
  res.status(200).json({
    message: "Alexander Piroumian Sprint Challenge Back-end 1"
  });
});

module.exports = server;
