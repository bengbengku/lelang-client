import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { MantineProvider } from "@mantine/core";
import { Notifications } from "@mantine/notifications";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <MantineProvider
    theme={{
      colorScheme: "dark",
      breakpoints: {
        xs: "480",
        sm: "768",
        md: "1060",
      },
    }}
    withGlobalStyles
    withNormalizeCSS
  >
    <Router>
      <Notifications />
      <App />
    </Router>
  </MantineProvider>
);
