import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './main.css'

// Layouts
import MainLayout from '../layouts/mainLayout'
import AdminLayout from '../layouts/adminLayout'


// Pages
import Home from '../pages/home';
import ErrorPage from '../pages/errorPage';
import DashBoard from '../pages/admin/dashBoard';
import UserDashBoard from '../pages/userDashboard'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path='' element={<Home />} />
          <Route path='/dashboard' element={<UserDashBoard />} />
          <Route path='*' element={<ErrorPage />} />
        </Route>

        <Route path="/admin" element={<AdminLayout />}>
          <Route path='' element={<DashBoard />} />
        </Route>

        <Route path='*' element={<ErrorPage />} />
        
      </Routes>
    </>
  )
}

export default App
