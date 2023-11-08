
import {BrowserRouter, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import Service from "./pages/Service.jsx";
import About from "./pages/About.jsx";
import Project from "./pages/Project.jsx";
import Blog from "./pages/Blog.jsx";
import Contact from "./pages/Contact.jsx";
import {Route} from "react-router-dom";


function App() {


  return (
    <div>
      <BrowserRouter>
          <Routes>
              <Route path='/' element={<HomePage/>}/>
              <Route path='/service/' element={<Service/>}/>
              <Route path='/about/' element={<About/>}/>
              <Route path='/projects/' element={<Project/>}/>
              <Route path='/blog/' element={<Blog/>}/>
              <Route path='/contact/' element={<Contact/>}/>
          </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
