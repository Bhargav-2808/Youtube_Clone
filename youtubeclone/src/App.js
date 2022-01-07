import "./App.scss";
import react , {useState} from 'react'
import  {Header}  from "./Components/Header/Header";
import { Sidebar } from "./Components/SIdebar/Sidebar";
import LoginScreen from "./Screen/LoginScreen/LoginScreen";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Library from "./Components/Librarys/Library";
import Subscription from "./Components/Subscription/Subscription";
import History from "./Components/History/History";
import Liked from "./Components/Liked/Liked";
import Home from "./Components/Homes/Home";

function App() {
  const [sidebar, toggleSidebar] = useState(false)
  const handleToggleSidebar = () => toggleSidebar(value => !value)
  return (
    <Router>
      <Header handleToggleSidebar={handleToggleSidebar} />
         <div className='app_'>
            <Sidebar
               sidebar={sidebar}
               handleToggleSidebar={handleToggleSidebar}
            />
            <Routes>
              <Route  exact path="/" element={<Home />}/>
              <Route  exact path="/subscription" element={<Subscription />}/>
              <Route  exact path="/liked" element={<Liked />}/>
              <Route  exact path="/history" element={<History />}/>
              <Route  exact path="/library" element={<Library />}/>
              <Route  exact path="/login" element={<LoginScreen />}/>
            </Routes>
         </div>
    </Router>
  );
}

export default App;
