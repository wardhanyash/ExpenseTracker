import "./App.css";
import "antd/dist/antd.css"; // to import css of antd
// for normal styling like padding margin we'll use bootstrap
// for components we'll use antd
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Test from "./pages/Test";
import Login from "./pages/Login";
import Register from "./pages/Register";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route path="/test" element={<Test />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export const ProtectedRoute = (props) => {
  if (localStorage.getItem("expense-tracker")) {
    return props.children;
  } else {
    return <Navigate to="/login" />;
  }
};

export default App;
