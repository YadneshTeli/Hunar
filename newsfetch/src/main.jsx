import React from 'react'
import ReactDOM from 'react-dom/client'
import Layout from './Layout'
import { Route } from 'react-router-dom'
import About , {githubInfoLoader}from './components/About/About'
import TrendingNews from './components/TrendingNews/TrendingNews'
import Contact from './components/Contact/Contact'
import Blog from './components/Blog/Blog'
import NewsDetail from './components/NewsDetail/NewsDetail'
import { RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'

// import App from './App.jsx'
import './index.css'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
    <Route path='' element={<TrendingNews />} />
    <Route path='newsdetail' element={<NewsDetail />} />
    <Route loader={githubInfoLoader} path='about' element={<About />} />
    <Route path='contact' element={<Contact />} />
    <Route path='blog' element={<Blog />} />

      
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />

  </React.StrictMode>,
)
