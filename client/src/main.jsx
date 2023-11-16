import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { ThemeProvider } from "@material-tailwind/react";
import { RouterProvider } from "react-router-dom";
import router from "./router";
import { BlogProvider } from "./contexts/BlogContext";
import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";

const client = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={client}>
      <ThemeProvider>
        <BlogProvider>
          <RouterProvider router={router} />
        </BlogProvider>
      </ThemeProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
