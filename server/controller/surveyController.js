const SurveyModel = require("../model/surveyModel");

module.exports.sendSurvey = async (req, res) => {
  try {
    const { name, email, phone, address, message, gender, nationality } =
      req.body;
    const newSurvey = new SurveyModel({
      name,
      email,
      phone,
      address,
      message,
      gender,
      nationality,
    });
    await newSurvey.save();
    res.status(200).json(newSurvey);
  } catch (error) {}
};

module.exports.getSurveys = async (req, res) => {
  try {
    const allSurveys = await SurveyModel.find();
    res.status(200).json(allSurveys);
  } catch (error) {}
};

module.exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (email == "admin@gmail.com" && password == "admin") {
      return res.status(200).json({ message: "Login Success" });
    }

    res.status(400).json({ message: "Email and Password are wrong!" });
  } catch (error) {}
};
