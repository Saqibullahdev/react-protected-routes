import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import About from './components/About'
import Home from './components/Home'
import ProtectedRoutes from './ProtectedRoutes'
import Profile from './components/profile/Profile'
import Post from './components/profile/Post'
import Login from './components/Login'

function App() {

  return (
    <>
     <nav>
      <div className="nav-wrapper">
        <a href="#" className="brand-logo">Logo</a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/profile">Profile</a></li>
          <li><a href="/profile/post">Profile/post</a></li>

        </ul>
      </div>
     </nav>

    {/* all route here  */}
     <BrowserRouter>
     <Routes>
      /**
      * create Route without Path attribute
      * ProtectedRoutes is a component that will check if user is authenticated or not
      * all the routes that need authentication will be wrapped inside ProtectedRoutes

       */
      <Route element={<ProtectedRoutes/>}>
        <Route path="/profile" element={<Profile/>} />
        <Route path="/profile/post" element={<Post/>} />
      </Route>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path='/login' element={<Login/>}></Route>

      
     </Routes>
    </BrowserRouter>
    </>
    
  )
}

export default App
