import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CustomerRegister from './component/CustomerRegister';
import AdminRegister from './component/AdminRegister';
import AdminLogin from './component/AdminLogin';
import Dashboard from './component/Dashboard';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/register/customer" element={<CustomerRegister />} />
        <Route path="/register/admin" element={<AdminRegister />} />
        <Route path="/login" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/customer/dashboard" element={<Dashboard />} />
        <Route path="/" element={<AdminLogin />} />
      </Routes>
    </Router>
  );
}

export default App;
