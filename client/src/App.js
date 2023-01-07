import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Users from "./components/users/users";
import { ToastContainer } from "react-toastify";
const App = () => {
  return (
    <div className="App">
    <ToastContainer />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Users />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
};

export default App;
