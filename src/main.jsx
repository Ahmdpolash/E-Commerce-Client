import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import Route from "./Router/Route.jsx";
import { NextUIProvider } from "@nextui-org/system";
import AuthProvider from "./Provider/AuthProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <NextUIProvider>
      <AuthProvider>
        <RouterProvider router={Route} />
      </AuthProvider>
    </NextUIProvider>
  </React.StrictMode>
);
