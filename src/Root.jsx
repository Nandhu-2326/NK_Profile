import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import Project from "./Project";
const Root = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/Project" element={<Project />} />
        </Routes>
      </Router>
    </>
  );
};

export default Root;
