import Footer from "./assets/components/Footer"
import SideBar from "./assets/components/SideBar"
import Overview from "./assets/pages/Overview"

function App() {

  return (
    <div className="w-screen h-auto bg-cream flex flex-col lg:flex-row ">
       <div className="hidden lg:block overflow-y-auto h-screen w-60 "> 
        <SideBar/>
      </div>
      <div className="flex-1 h-screen overflow-y-auto"> 
      <Overview />
      </div>
      <div  className="block lg:hidden">
      <Footer/>
      </div>

    </div>
  )
}

export default App
