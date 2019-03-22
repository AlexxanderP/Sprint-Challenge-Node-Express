const express = require("express");
const helmet = require("helmet");
const server = express();

const projectsRouter = require("./routes/projectsRouter");

server.use(express.json());
server.use(helmet());

server.use("/api/projects", projectsRouter);

server.get("/", (req, res) => {
  res.status(200).json({
    message: "Alexander Piroumian Sprint Challenge Back-end 1"
  });
});

module.exports = server;
