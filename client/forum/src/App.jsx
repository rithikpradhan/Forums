import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Forum from "./pages/Forum"; 
import ProtectedRoute from "./components/ProtectedRoutes";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forum" element={<ProtectedRoute> <Forum /> </ProtectedRoute>} />   

      </Routes>
    </BrowserRouter>
  );
}

export default App;
