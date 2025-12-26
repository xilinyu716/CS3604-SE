import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/Home/Home'
import LoginPage from './pages/Login/LoginPage'
import RegisterPage from './pages/Register/RegisterPage'
import TrainListPage from './pages/TrainList/TrainListPage'
import OrderFillPage from './pages/OrderFill/OrderFillPage'
import PassengersPage from './pages/PersonalCenter/Passengers/PassengersPage'
import OrderManagementPage from './pages/PersonalCenter/Orders/OrderManagementPage'
import ProfilePage from './pages/PersonalCenter/Profile/ProfilePage'
import ForgotPage from './pages/Forgot/ForgotPage'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/forgot" element={<ForgotPage />} />
        <Route path="/trains" element={<TrainListPage />} />
        <Route path="/order" element={<OrderFillPage />} />
        <Route path="/center/passengers" element={<PassengersPage />} />
        <Route path="/center/orders" element={<OrderManagementPage />} />
        <Route path="/center/profile" element={<ProfilePage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}
