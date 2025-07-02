// src/App.js

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard"; // adjust if in components
import LandingPage from "./pages/LandingPage"; // your homepage
import ProtectedRoute from "./components/ProtectedRoute";
import AdminPage from "./pages/AdminPage";

function App() {
  return (
    
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard" element={<ProtectedRoute><Dashboard /> </ProtectedRoute>} />
        <Route
            path="/admin"
            element={
                <ProtectedRoute allowedRoles={["ADMIN"]}>
                <AdminPage />
                </ProtectedRoute>
                    }
/>
      </Routes>
    </Router>
  );
}

export default App;
