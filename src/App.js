import React, {useEffect} from 'react';
import './App.css';

//Keycloak login
import { ReactKeycloakProvider } from '@react-keycloak/web';
import keycloak from './Keycloak';

//Navigation
import { BrowserRouter , Navigate, Route, Routes} from "react-router-dom";
import Nav from "./components/Nav";
import WelcomePage from "./pages/Homepage";
import SecuredPage from "./pages/Securedpage";
import AdminPage from "./pages/Adminpage";
import Unauthorized from "./pages/Unauthorized";
import PrivateRoute from './helpers/PrivateRoute';
import ProtectedRoute from './helpers/ProtectedRoute';
import AdminRoute from './helpers/AdminRoute';

//Routes

const App = () => {
  return (
    <div className="App">
      <ReactKeycloakProvider authClient={keycloak}>
        <Nav />
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<WelcomePage />} />
            <Route path="/secured" element={<PrivateRoute><SecuredPage /></PrivateRoute>} />
            <Route path="/admin" element={<AdminPage/>}/>
            <Route path="/unauthorized" element={<Unauthorized />} />
          </Routes>
        </BrowserRouter>
      </ReactKeycloakProvider>
    </div>
  );
};

export default App;