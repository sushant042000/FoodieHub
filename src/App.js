import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Success from "./Pages/Success";
import Error from "./Pages/Error";
import { ToastContainer } from "react-toastify";
import ProtectedRoute from "./Components/Protected";

function App() {
  return (
    <>
      <ToastContainer position="top-center" autoClose={2000} />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/success" element={<ProtectedRoute component={<Success/>}/>} />
          <Route path="/*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
