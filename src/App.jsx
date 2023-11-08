
import {BrowserRouter, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import ServicePage from "./pages/ServicePage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import ProjectPage from "./pages/ProjectPage.jsx";
import BlogPage from "./pages/BlogPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import {Route} from "react-router-dom";
import ProjcectByCatPage from "./pages/ProjcectByCatPage.jsx";


function App() {


  return (
    <div>
      <BrowserRouter>
          <Routes>
              <Route path='/' element={<HomePage/>}/>
              <Route path='/service/' element={<ServicePage/>}/>
              <Route path='/about/' element={<AboutPage/>}/>
              <Route path='/projects/:CategoryID' element={<ProjcectByCatPage/>}/>
              <Route path='/projects/' element={<ProjectPage/>}/>
              <Route path='/blog/' element={<BlogPage/>}/>
              <Route path='/contact/' element={<ContactPage/>}/>
          </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
