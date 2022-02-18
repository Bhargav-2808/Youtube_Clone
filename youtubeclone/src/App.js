import "./App.scss";
import react, { useEffect, useState } from "react";
import { Header } from "./Components/Header/Header";
import { Sidebar } from "./Components/SIdebar/Sidebar";
import LoginScreen from "./Screen/LoginScreen/LoginScreen";
import WatchScreen from "./Screen/WatchScreen/WatchScreen";
import { Route, Routes, useNavigate } from "react-router-dom";
import Library from "./Components/Librarys/Library";
import History from "./Components/History/History";
import Liked from "./Components/Liked/Liked";
import HomeScreen from "./Screen/HomeScreen/HomeScreen";
import { useSelector } from "react-redux";
import SubscriptionScreen from "./Screen/SubscriptionScreen/SubscriptionScreen";

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
          <Route exact path="/" element={<HomeScreen/>} />
          <Route exact path="/subscription" element={<SubscriptionScreen />} />
          <Route exact path="/liked" element={<Liked />} />
          <Route exact path="/history" element={<History />} />
          <Route exact path="/library" element={<Library />} />
          <Route exact path="/watch/:id" element={<WatchScreen />} />
        </Routes>
      </div>
    </>
  );
}


export default App;

