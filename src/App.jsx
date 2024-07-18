import './App.css'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import AboutMe from './pages/aboutme'
import Contact from './pages/contact'
import Portfolio from './pages/portfolio' 
// import Resume from './pages/resume'

function App() {

  return (
    <BrowserRouter>
   <Routes>
    <Route path='/' element ={<AboutMe />} />
    <Route path='/contact' element ={<Contact />} />
    <Route path='/portfolio' element ={<Portfolio />} />
    {/* <Route path ='/resume' element ={<Resume />} /> */}

   </Routes>
    </BrowserRouter>
  )
}

export default App
