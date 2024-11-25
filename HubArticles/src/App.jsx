import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";


function App() {
 
  return (
    <div>
      <Navbar/>
      <h1 className="text-gray-950">home</h1>
      <Outlet/>
    </div>
  )
}

export default App
