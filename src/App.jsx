import { BrowserRouter, Route, Routes } from "react-router-dom"
import Footer from "./assets/components/Footer"
import SideBar from "./assets/components/SideBar"
import Overviewpage from "./assets/pages/Overviewpage"
import Transactionspage from "./assets/pages/Transactionspage"

function App() {

  return (
      <BrowserRouter>
    <div className="w-screen h-auto bg-cream flex flex-col lg:flex-row ">
       <div className="hidden lg:block overflow-y-auto h-screen w-60 "> 
        <SideBar/>
      </div>

      <Routes>
        <Route path="/" element={<Overviewpage/>} />
        <Route path="/Transactionspage" element={<Transactionspage/>} />
      </Routes>
      <div  className="block lg:hidden">
      <Footer/>
      </div>
    </div>
    </BrowserRouter>
  )

}

export default App
