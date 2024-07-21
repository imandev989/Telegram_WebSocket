const express = require("express");
const path = require("path");
const NamespaceRouter = require("./routes/Namespace");

const app = express();

//* BodyParser
app.use(express.urlencoded({ extended: true, limit: "50mb" }));
app.use(express.json({ limit: "50mb" }));

//* CORS Policy

//* Template Engine

//* Static Folder
app.use(express.static(path.join(__dirname, "public")));

//* Routes
app.use("/api/namespaces", NamespaceRouter);

//* 404 Error handler

module.exports = app;
