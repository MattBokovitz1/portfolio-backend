const express = require("express");
const booksRouter = require("./books/books-router");
const blogRouter = require("./blog/blog-router");
const projectsRouter = require("./projects/projects-router");
const potentialRouter = require("./potential/potential-router");

const cors = require("cors");
const helmet = require("helmet");

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.get("/", (req, res) => {
  res.send({ server: "Server is up" });
});

server.use("/books", booksRouter);
server.use("/projects", projectsRouter);
server.use("/blogs", blogRouter);
server.use("/potential", potentialRouter);

module.exports = server;
