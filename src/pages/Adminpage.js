import React from "react";
import { useKeycloak } from "@react-keycloak/web";
import { useNavigate } from "react-router-dom";

const AdminPage = () => {
  const { keycloak } = useKeycloak();
  const navigate = useNavigate();

  const hasRealmAdminRole =
    keycloak.authenticated &&
    keycloak.tokenParsed?.realm_access?.roles.includes("RealmAdmin");

  if (!hasRealmAdminRole) {
    // Redirect to unauthorized page
    navigate("/unauthorized");
    return null; // Return null to prevent rendering unauthorized content
  }

  return (
    <div>
      <h2>Admin Page</h2>
      {/* Your admin page content */}
    </div>
  );
};

export default AdminPage;
