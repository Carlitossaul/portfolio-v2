import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { ModeLightProvider } from "./context/ThemeLight.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ModeLightProvider>
    <BrowserRouter>
      <App />
      <Toaster
        position="bottom-right"
        toastOptions={{
          success: {
            style: {
              background: "var(--blueIntense)",
              border: "2px solid rgba(0, 255, 170, 0.5)",
              color: "var(--black)",
            },
          },
          error: {
            style: {
              background: "var(--blueIntense)",
              border: "2px solid var(--blue)",
              color: "var(--black)",
            },
          },
          style: {
            background: "var(--blueIntense)",
            border: "2px solid var(--blue)",
            color: "var(--black)",
            fontWeight: "600",
          },
        }}
      />
    </BrowserRouter>
  </ModeLightProvider>
);
