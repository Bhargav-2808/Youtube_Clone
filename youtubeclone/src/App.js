import "./App.scss";
import react, { useEffect, useState } from "react";
import { Header } from "./Components/Header/Header";
import { Sidebar } from "./Components/SIdebar/Sidebar";
import LoginScreen from "./Screen/LoginScreen/LoginScreen";
import { Route, Routes, useNavigate } from "react-router-dom";
import Library from "./Components/Librarys/Library";
import Subscription from "./Components/Subscription/Subscription";
import History from "./Components/History/History";
import Liked from "./Components/Liked/Liked";
import Home from "./Components/Homes/Home";
import { useSelector } from "react-redux";

function App() {
 
  
  const [sidebar, toggleSidebar] = useState(false);
  const handleToggleSidebar = () => toggleSidebar((value) => !value);
  const {accessToken,loading} = useSelector(state=>state.auth);
  const navigate = useNavigate();
  useEffect( ()=>{
    if(!accessToken && !loading)
    {
      navigate("/login")
    }
  },[accessToken,loading, navigate]); 

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

