import "./App.scss";
import react , {useState} from 'react'
import  {Header}  from "./Components/Header/Header";
import { Sidebar } from "./Components/SIdebar/Sidebar";
import LoginScreen from "./Screen/LoginScreen/LoginScreen";

function App() {
  const [sidebar, toggleSidebar] = useState(false)
  const handleToggleSidebar = () => toggleSidebar(value => !value)
  return (
    <>
      <Header handleToggleSidebar={handleToggleSidebar} />
         <div className='app_'>
            <Sidebar
               sidebar={sidebar}
               handleToggleSidebar={handleToggleSidebar}
            />
           
         </div>
    </>
  );
}

export default App;
