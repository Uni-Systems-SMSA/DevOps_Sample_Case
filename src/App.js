import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import AdminLayout from "layouts/Admin/Admin.js";

//Keycloak login
import { ReactKeycloakProvider } from '@react-keycloak/web';
import keycloak from './Keycloak';
    
const App = () => {
    return (
    <ReactKeycloakProvider   authClient={keycloak}>  
    <BrowserRouter>
        <Routes>
          <Route path="/admin/*" element={<AdminLayout />} />
          <Route
            path="*"
            element={<Navigate to="/admin/dashboard" replace />}
          />
        </Routes>
      </BrowserRouter>
      </ReactKeycloakProvider>  
    );   
};      

export default App