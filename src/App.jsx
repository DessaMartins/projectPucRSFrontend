import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Home } from "./pages/home";
import { CreateAnimal } from "./pages/createAnimal";
import { CreateReport } from "./pages/createReport";

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/cadastrar">Cadastrar Animal</Link> |{" "}
        <Link to="/denuncia">Denúncia</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cadastrar" element={<CreateAnimal />} />
        <Route path="/denuncia" element={<CreateReport />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
