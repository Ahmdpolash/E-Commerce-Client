import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import Route from "./Router/Route.jsx";
import { NextUIProvider } from "@nextui-org/system";
import AuthProvider from "./Provider/AuthProvider.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const client = new QueryClient();
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <NextUIProvider>
      <QueryClientProvider client={client}>
        <AuthProvider>
          <RouterProvider router={Route} />
        </AuthProvider>
      </QueryClientProvider>
    </NextUIProvider>
  </React.StrictMode>
);
