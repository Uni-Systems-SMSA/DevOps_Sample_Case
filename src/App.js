import React from 'react';
import './App.css';
//import jwt_decode from 'jwt-decode';
//import HelloWorld from './HelloWorld';

import { ReactKeycloakProvider } from '@react-keycloak/web';
import keycloak from './Keycloak';

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import WelcomePage from "./pages/Homepage";
import SecuredPage from "./pages/Securedpage";
import PrivateRoute from './helpers/PrivateRoute';




function App(){
    return (
      <div className='App'>
        <ReactKeycloakProvider authClient={keycloak}>
         <Nav />
           <BrowserRouter>
           <Routes>
           <Route exact path="/" element={<WelcomePage />} />
           <Route
             path="/secured"
             element={
               <PrivateRoute>
                 <SecuredPage />
               </PrivateRoute>
             }
           />
           </Routes>
           </BrowserRouter>
        </ReactKeycloakProvider>
       </div>
  );
}

export default App;