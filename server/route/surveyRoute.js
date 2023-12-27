const express = require("express");
const {
  sendSurvey,
  getSurveys,
  login,
} = require("../controller/surveyController");

const router = express.Router();

router.post("/", sendSurvey);
router.get("/feedbacks", getSurveys);
router.post("/login", login);

module.exports = router;
