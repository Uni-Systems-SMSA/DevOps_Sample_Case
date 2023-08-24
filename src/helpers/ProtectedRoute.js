/*
This helper is used to protect any routes from logged out users. 
When a logged out user tries to view the page an alert is pressented that asks him to login. 
*/

import React, { useEffect } from "react";
import { useKeycloak } from "@react-keycloak/web";
import { useNavigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
 const { keycloak } = useKeycloak();
 const navigate = useNavigate();
 const isLoggedIn = keycloak.authenticated;

 useEffect(() =>{
 if (!isLoggedIn) {
    // Show a browser alert if the user is not logged in
    window.alert("Please log in to view this page!");
    navigate("/admin/dashboard"); // Redirect without full reload
    }
    }, [isLoggedIn, navigate]);

 return <>{children}</>;
};

export default ProtectedRoute;