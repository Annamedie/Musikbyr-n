import React from "react";
import ReactDOM from "react-dom/client";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import App from "./App";
import InstrumentPage from "./pages/InstrumentPage.tsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" Component={App}>
      <Route path=":instrument" Component={InstrumentPage} />
    </Route>
  )
);

// instrument istället för clarinet

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
