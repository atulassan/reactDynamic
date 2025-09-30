/*import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UseRef from '../Pages/Hooks/UseRef';
import UseState from '../Pages/Hooks/UseState';
import Tab from '../Pages/Tab';
import Home from '../Pages/Home'; // Assuming you have a Home component
import Login from '../Pages/Login'; // Assuming you have a Login component
import Logout from '../Pages/Logout'; // Assuming you have a Logout component
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import Dashboard from '../Pages/Dashboard';
import NotFound from '../Pages/NotFound'; // Assuming you have a NotFound component
import AuthProvider from '../Components/Modules/AuthContext';
import DebounceInJS from '../Pages/Debounceinjs'; // Assuming you have a DebounceInJS component
import GroupBy from '../Pages/GroupBy'; // Assuming you have a GroupBy component
import UseMemo from '../Pages/Hooks/UseMemo';



function AppRoutes() {
  return (
    <AuthProvider>
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/usememo" element={<UseMemo />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/hooks/useRef" element={<UseRef />} />
            <Route path="/hooks/useState" element={<UseState />} />
            <Route path="/debounce" element={<DebounceInJS />} />
            <Route path="/groupby" element={<GroupBy />} />
            <Route path="/dashboard" element={
                <PrivateRoute>
                    <Dashboard />
                </PrivateRoute>
            } />
            <Route path="/tab" element={<Tab />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
        
    </AuthProvider>
  );
} 

export default AppRoutes;*/