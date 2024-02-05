import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import router from "./routers/routers.jsx";
import { RouterProvider } from "react-router-dom";
import SideBarProvider from "./Context/SideBarProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <SideBarProvider>
      <RouterProvider router={router} />
    </SideBarProvider>
  </React.StrictMode>
);
