/* 
Role-Based Access Control (RBAC) in React
Role-Based Access Control (RBAC) is a security model used to restrict user access to certain parts 
of an application based on their roles (e.g., Admin, User, Editor).

*/
// Step 1: Define User Roles
export const roles = {
  admin: ["dashboard", "manageUsers", "settings"],
  editor: ["dashboard", "editPosts"],
  user: ["dashboard"],
};

//  Step 2: Create a Context for User Authentication & Role
import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState({ role: "user" }); // Default role

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}

//Step 3: Create a ProtectedRoute Component
import { useAuth } from "../context/AuthContext";
import { Navigate } from "react-router-dom";
import { roles } from "../roles";

export function ProtectedRoute({ children, requiredRole }) {
  const { user } = useAuth();

  if (!roles[user.role]?.includes(requiredRole)) {
    return <Navigate to="/unauthorized" />;
  }

  return children;
}

//Step 4: Protect Routes Based on Role
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { ProtectedRoute } from "./components/ProtectedRoute";
import Dashboard from "./pages/Dashboard";
import ManageUsers from "./pages/ManageUsers";
import Unauthorized from "./pages/Unauthorized";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />

          <Route
            path="/manage-users"
            element={
              <ProtectedRoute requiredRole="manageUsers">
                <ManageUsers />
              </ProtectedRoute>
            }
          />

          <Route path="/unauthorized" element={<Unauthorized />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;

//Step 5: Control UI Elements Based on Role
import { useAuth } from "../context/AuthContext";

function Dashboard() {
  const { user } = useAuth();

  return (
    <div>
      <h1>Dashboard</h1>
      {user.role === "admin" && <button>Manage Users</button>}
    </div>
  );
}

export default Dashboard;
