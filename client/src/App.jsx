import { Routes, Route } from 'react-router-dom'
import './main.css'

// Layouts
import MainLayout from '../layouts/mainLayout'
import AdminLayout from '../layouts/adminLayout'


// Pages
import Home from '../pages/home';
import ProductPage from '../pages/productPage';
import ErrorPage from '../pages/errorPage';
import DashBoard from '../pages/admin/dashBoard';
import UserDashBoard from '../pages/userDashboard'


function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path='dashboard' element={<UserDashBoard />} />
          <Route path='*' element={<ErrorPage />} />
        </Route>

        <Route path="/viewproduct/:id" element={<MainLayout />}>
          <Route index element={<ProductPage />} />
          <Route path='*' element={<ErrorPage />} />
        </Route>

        <Route path="/admin" element={<AdminLayout />}>
          <Route path='' element={<DashBoard />} />
          <Route path='*' element={<ErrorPage />} />
        </Route>

        <Route path='*' element={<ErrorPage />} />

      </Routes>
    </>
  )
}

export default App
