import { Routes, Route } from 'react-router-dom'
import './main.css'

import ScrollToTop from '../components/scrollToTop'

// Layouts
import MainLayout from '../layouts/mainLayout'
import AdminLayout from '../layouts/adminLayout'


// Pages
import Home from '../pages/home';
import ProductPage from '../pages/productPage';
import UserDashBoard from '../pages/userDashboard'

import ErrorPage from '../pages/error/errorPage.jsx';
import ErrorProduct from '../pages/error/errorProduct.jsx';
import ErrorAdmin from '../pages/error/errorAdmin.jsx';

import DashBoard from '../pages/admin/dashBoard';
import ProductPanel from '../pages/admin/productPanel';
import AdsPanel from '../pages/admin/adsPanel';


function App() {

  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path='dashboard' element={<UserDashBoard />} />
          <Route path='*' element={<ErrorPage />} />
        </Route>

        <Route path="/viewproduct/:id" element={<MainLayout />}>
          <Route index element={<ProductPage />} />
          <Route path='*' element={<ErrorProduct />} />
        </Route>

        <Route path="/admin" element={<AdminLayout />}>
          <Route path='' element={<DashBoard />} />
          <Route path='products' element={<ProductPanel />} />
          <Route path='ads' element={<AdsPanel />} />
          <Route path='*' element={<ErrorAdmin />} />
        </Route>

        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </>
  )
}

export default App
