import "./App.scss";
import react, { useState } from "react";
import { Header } from "./Components/Header/Header";
import { Sidebar } from "./Components/SIdebar/Sidebar";
import LoginScreen from "./Screen/LoginScreen/LoginScreen";
import { Route, Routes, useNavigate } from "react-router-dom";
import Library from "./Components/Librarys/Library";
import Subscription from "./Components/Subscription/Subscription";
import History from "./Components/History/History";
import Liked from "./Components/Liked/Liked";
import Home from "./Components/Homes/Home";

function App() {
  const historu_ = useNavigate();
  console.log(historu_);
  const [sidebar, toggleSidebar] = useState(false);
  const handleToggleSidebar = () => toggleSidebar((value) => !value);
  if (window.location.pathname === '/login') return <LoginScreen/>;
  return (
      
    <>
      <Header handleToggleSidebar={handleToggleSidebar} />
      <div className="app_">
        <Sidebar sidebar={sidebar} handleToggleSidebar={handleToggleSidebar} />

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/subscription" element={<Subscription />} />
          <Route exact path="/liked" element={<Liked />} />
          <Route exact path="/history" element={<History />} />
          <Route exact path="/library" element={<Library />} />
        </Routes>
      </div>
    </>
  );
}


export default App;

