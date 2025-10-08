import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { createHashRouter , RouterProvider } from 'react-router-dom'
import HomePage from './pages/HomePage/HomePage'
import ProductsPage from './pages/ProductsPage/ProductsPage'
import './App.css'

function App() {
  const router = createHashRouter([
    {
      path: '/',
      element: <HomePage/>
    },
    {
      path: '/products',
      element: <ProductsPage/>
    }])

  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App
