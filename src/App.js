import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PageHome } from "./pages/Home";
import { PageCards } from "./pages/Cards";
import { PageDecomposition } from "./pages/Decomposition";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageHome />} />
        <Route path="/cards" element={<PageCards />} />
        <Route path="/decomposition" element={<PageDecomposition />} />
      </Routes>
    </BrowserRouter>
  );
};

export { App };
