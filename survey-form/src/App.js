import "./App.css";
import Feedbacks from "./components/Feedbacks";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SurveyForm from "./components/SurveyForm";
import Login from "./components/Login";

function App() {
  return (
    <Routes>
      <Route path="/" element={<SurveyForm />} />
      <Route path="/feedbacks" element={<Feedbacks />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
