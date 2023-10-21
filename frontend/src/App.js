import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import QrCode from "./Components/QrCode";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<QrCode />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
