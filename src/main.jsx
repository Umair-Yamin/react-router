import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Banner from './components/Banner/Banner.jsx'
import Contact from './components/Contact/Contact.jsx'
import User from './components/User/User.jsx'
import Github, { githubInfoLoader } from './components/Github/Github.jsx'
import { Footer } from 'flowbite-react'
import Password from './components/Password/Password.jsx'
import Signup from './components/Signup/Signup.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='Banner' element={<Banner />} />
      <Route path='contact' element={<Contact />} />
      <Route path='password' element={<Password/>} />
      <Route path='Signup' element={<Signup/>} />
   
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)




{/* <Route 
      loader={githubInfoLoader}
      path='github' 
      element={<Github />}
       /> */}