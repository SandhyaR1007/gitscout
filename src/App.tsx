import { useState } from "react";
import Searchbar from "./components/Searchbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import UserDetails from "./pages/UserDetails";

const App = () => {
  const [searchQuery, setSearchQuery] = useState("");
  return (
    <div>
      <Searchbar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<UserDetails />} path="/user/:username" />
      </Routes>
    </div>
  );
};

export default App;
