import Footer from "./assets/components/Footer"
import SideBar from "./assets/components/SideBar"
import Overview from "./assets/pages/Overview"

function App() {

  return (
    <div className="w-screen bg-cream flex flex-col lg:flex-row ">
       <div className="hidden lg:block"> 
        <SideBar/>
      </div>
      <Overview />
      <div  className="block lg:hidden">
      <Footer/>
      </div>

    </div>
  )
}

export default App
