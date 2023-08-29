import React from "react";
import { useKeycloak } from "@react-keycloak/web";
import { Navigate } from "react-router-dom";

const AdminRoute = ({ children }) => {
  const { keycloak } = useKeycloak();
  const hasRealmAdminRole =
    keycloak?.authenticated &&
    keycloak?.tokenParsed?.realm_access?.roles.includes("RealmAdmin");

  if (!hasRealmAdminRole) {
    return <Navigate to="/unauthorized" />;
  }

  return children;
};

export default AdminRoute;
