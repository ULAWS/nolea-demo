import "./App.css";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import { NextUIProvider } from "@nextui-org/react";
import { Admin } from "./pages/Admin";

function App() {
  return (
    <NextUIProvider>
      <Provider store={store}>
        <Router>
          <div className="w-screen h-screen">
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/" element={<Home />} />
              <Route path="/admin" element={<Admin />} />
            </Routes>
          </div>
        </Router>
      </Provider>
    </NextUIProvider>
  );
}

export default App;
