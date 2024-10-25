import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Error404 from "./pages/Error404/Error404";
import Login from "./pages/Login/Login";
import Profile from "./pages/Profile/Profile";
import SignUp from "./pages/SignUp/SignUp";
import Header from "./components/Header/Header";
import Map from "./components/Map/Map";
import "./App.scss";
import SideMenu from "./components/SideMenu/SideMenu";
import SearchBar from "./components/SearchBar/SearchBar";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Map />
              <SideMenu />
            </>
          }
        />
        <Route
          path="/map"
          element={
            <>
              <Map />
              <SideMenu />
            </>
          }
        />
        {/* <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/signup" element={<SignUp />} /> */}
        <Route path="*" element={<Error404 />} />
      </Routes>
    </Router>
  );
}

export default App;
