
import {Routes,Route} from "react-router-dom";
import './App.css'
import RegistrationPage from "./pages/RegistrationPage/RegistrationPage";
import LoginPage from "./pages/LoginPage/LoginPage";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <Routes>
      <Route path="/register" element={<RegistrationPage/>}/>
      <Route path="/login" element={<LoginPage/>}/>
    </Routes>
    

  </>   
  )
 
}

export default App
