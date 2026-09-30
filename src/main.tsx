import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "@/components/ui/provider";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import App from "./App";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider>
      <App />
    </Provider>
  </StrictMode>,
);
