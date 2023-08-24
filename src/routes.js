import React from "react";

import Dashboard from "views/Dashboard.js";
import Icons from "views/Icons.js";
import Map from "views/Map.js";
import Notifications from "views/Notifications.js";
import TableList from "views/TableList.js";
import Typography from "views/Typography.js";
import UserProfile from "views/UserProfile.js";
//keycloak
import { useKeycloak } from "@react-keycloak/web";
import keycloak from "Keycloak";

import { Navigate } from "react-router-dom";

//protected routes
import ProtectedRoute from "./helpers/ProtectedRoute";
import RoleProtectedRoute from "helpers/RoleProtectedRoute";


var routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "tim-icons icon-chart-pie-36",
    component: <Dashboard />,
    layout: "/admin",
  },
  {
    path: "/icons",
    name: "Icons",
    icon: "tim-icons icon-atom",
    component: <Icons />,
    layout: "/admin",
  },
  {
    path: "/map",
    name: "Map",
    icon: "tim-icons icon-pin",
    component: (<ProtectedRoute><Map /></ProtectedRoute>),
    layout: "/admin",
  },
  {
    path: "/notifications",
    name: "Notifications",
    icon: "tim-icons icon-bell-55",
    component: (<ProtectedRoute><Notifications /></ProtectedRoute>),
    layout: "/admin",
  },
  {
    path: "/user-profile",
    name: "User Profile",
    icon: "tim-icons icon-single-02",
    component: (<RoleProtectedRoute><UserProfile /></RoleProtectedRoute>),
    layout: "/admin",
  },
  {
    path: "/tables",
    name: "Table List",
    icon: "tim-icons icon-puzzle-10",
    component: (<RoleProtectedRoute><TableList /></RoleProtectedRoute>),
    layout: "/admin",
  },
  {
    path: "/typography",
    name: "Typography",
    icon: "tim-icons icon-align-center",
    component: (<RoleProtectedRoute><Typography /></RoleProtectedRoute>),
    layout: "/admin",
  },
];
export default routes;
