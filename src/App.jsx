import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import FavorietPage from "./pages/FavorietPage";
import Sidebar from "./compponents/Sidebar";

function App() {
  return (
    <div className="flex">
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favoriets" element={<FavorietPage />} />
      </Routes>
    </div>
  );
}

export default App;
