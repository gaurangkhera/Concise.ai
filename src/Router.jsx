import { HashRouter,  Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import './styles/tw.css'
import Summarize from "./pages/Summarize";

const Router = () => {
  return (
    <HashRouter>
    <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/summarize" element={<Summarize />} />
      </Routes>
    </HashRouter>
  );
};

export default Router;