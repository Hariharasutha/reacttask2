import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Navbar } from "./component/Navbar";
import Home from "./component/Home";
import UserListPage from "./component/Userlist";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/list" element={<UserListPage />} />
      </Routes>
    </div>
  );
}

export default App;