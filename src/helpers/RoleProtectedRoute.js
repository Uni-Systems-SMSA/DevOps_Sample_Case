/*
This helper is used to protect any routes from unauthorized users (based on their role). 
When an unauthorized user tries to view the page an alert is pressented that asks the user to have the required role. 
*/

import React, { useEffect } from "react";
import { useKeycloak } from "@react-keycloak/web";
import { useNavigate } from "react-router-dom";

const RoleProtectedRoute = ({ children }) => {
 const { keycloak } = useKeycloak();
 const navigate = useNavigate();
 const isLoggedIn = 
    keycloak.authenticated && 
    keycloak.tokenParsed?.realm_access?.roles.includes("RealmAdmin");

 useEffect(() =>{
 if (!isLoggedIn) {
    // Show a browser alert if the user is not logged in
    window.alert("Only Admins are allowed to view this page. Ask to upgrade your role!");
    navigate("/admin/dashboard"); // Redirect without full reload
    }
    }, [isLoggedIn, navigate]);

 return <>{children}</>;
};

export default RoleProtectedRoute;