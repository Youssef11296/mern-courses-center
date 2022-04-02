// modules
import { BrowserRouter, Routes, Route } from "react-router-dom";
// children
import Header from "./widgets/Header";
import HomePage from "./pages/HomePage";
import ClassesPage from "./pages/ClassesPage";
// styles
import "./App.scss";

function App() {
  return (
    <BrowserRouter>
      <div className="app flex">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/classes" element={<ClassesPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
