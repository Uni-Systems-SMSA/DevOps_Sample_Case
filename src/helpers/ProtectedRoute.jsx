import React, { useEffect, useState } from 'react';
import { Route, Navigate } from 'react-router-dom';
import { useKeycloak } from '@react-keycloak/web';
import AdminPage from "../pages/Adminpage";
import { useLocation } from 'react-router-dom';


const ProtectedRoute = ({ element: Component}) => {
  const { keycloak } = useKeycloak();
  const [hasAccess, setHasAccess] = useState(true);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const role = queryParams.get('role');


    //const userRoles = keycloak.tokenParsed?.realm_access?.roles || [];
    //const userRoles=['RealmAdmin'];
    //const hasRequiredRole = roles.some((role) => userRoles.includes(role));
    //const hasRequiredRole=true;
    //setHasAccess(hasRequiredRole);
   
    if (role != 'RealmAdmin') {
      // If the user doesn't have the required role, navigate to the unauthorized page
      console.log(role)
      return <Navigate to="/unauthorized" />;
      
    }
  
    // If the user is authenticated and has the required role, render the component
    return <Navigate to={"/admin"} />;
  

 /* if (!hasAccess) {
    return <Navigate to="/unauthorized" />;
  }*/

};


export default ProtectedRoute;