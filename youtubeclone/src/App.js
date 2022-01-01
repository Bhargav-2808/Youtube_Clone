import "./App.css";
import react , {usestate} from 'react'
import { Sidebar } from "./Components/SIdebar/Sidebar";
import LoginScreen from "./Screen/LoginScreen/LoginScreen";

function App() {
  const [sidebar, toggleSidebar] = useState(false)
  const handleToggleSidebar = () => toggleSidebar(value => !value)
  return (
    <>
      {/* <LoginScreen /> */}
      <Sidebar sidebar={sidebar} handleToggleSidebar={handleToggleSidebar} />
    </>
  );
}

export default App;
