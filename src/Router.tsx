import { BrowserRouter, Route,  Routes } from "react-router-dom";
import Home from "./pages/Home";
import Nav from "./components/shared/Nav";
import Summarize from "./pages/Summarize";

const Router = () => {
  return (
    <BrowserRouter>
    <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/summarize" element={<Summarize />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;