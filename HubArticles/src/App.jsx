import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Card from "./components/CardG"
import HomePage from "./pages/HomePage";
function App() {
 
  return (
    <div>
      <Navbar/>
      <HomePage/>
      <Outlet/>
      <Card/>
    </div>
  )
}

export default App
