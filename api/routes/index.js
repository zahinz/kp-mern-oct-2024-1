import express from "express";
import logger from "../middlewares/logger.js";

const appRoutes = express.Router();
appRoutes.use(logger);

appRoutes.get("/health", function (req, res) {
  return res.json({
    message: "api server is healthy",
    data: true,
  });
});

appRoutes.post("/health", function (req, res) {
  const data = req.body;
  console.log(data);
  return res.json(data);
});

export default appRoutes;
