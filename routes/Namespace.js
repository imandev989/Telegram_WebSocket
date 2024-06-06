const express = require("express");
const NamespaceController = require("./../controllers/Namespace");

const router = express.Router();

router.get("/", NamespaceController.getAll);
router.post("/", NamespaceController.create);

module.exports = router;
