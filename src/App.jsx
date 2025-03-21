import { Routes, Route } from "react-router-dom";
import "./App.css";
import Banner from "./components/Banner";
import Menu from "./components/Menu";
import NotFound from "./pages/NotFound";
import Accounts from "./pages/Accounts";
import Transfer from "./pages/Transfer";
import Login from "./pages/Login";
import Cards from "./pages/Cards";
import More from "./pages/More";
import Pin from "./pages/Pin";
import ErrorBoundary from "./components/ErrorBoundary";
import { AuthProvider } from "./components/AuthContext"; // Path to your AuthContext
import ProtectedRoute from "./components/ProtectedRoute"; // Path to ProtectedRoute

function App() {
  return (
    <div className="body">
      <ErrorBoundary>
        <AuthProvider>
          <Banner />
          <Routes>
            <Route
              path="/"
              element={
                <ProtectedRoute>
                  <Accounts />
                  <Menu />
                </ProtectedRoute>
              }
            />
            <Route
              path="/transfer"
              element={
                <ProtectedRoute>
                  <Transfer />
                  <Menu />
                </ProtectedRoute>
              }
            />
            <Route
              path="/cards"
              element={
                <ProtectedRoute>
                  <Cards />
                  <Menu />
                </ProtectedRoute>
              }
            />
            <Route
              path="/more"
              element={
                <ProtectedRoute>
                  <More />
                  <Menu />
                </ProtectedRoute>
              }
            />
            <Route
              path="/pin"
              element={
                <ProtectedRoute>
                  <Pin />
                  <Menu />
                </ProtectedRoute>
              }
            />
            <Route path="*" element={<Login />} />{" "}
            <Route path="/login" element={<Login />} />
          </Routes>
        </AuthProvider>
      </ErrorBoundary>
    </div>
  );
}

export default App;
