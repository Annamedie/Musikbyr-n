import React from "react";
import ReactDOM from "react-dom/client";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import App from "./App";
import ClarinetPage from "./pages/ClarinetPage.tsx";
import SaxophonePage from "./pages/SaxophonePage.tsx";
import TrombonePage from "./pages/TrombonePage.tsx";
import TrumpetPage from "./pages/TrumpetPage.tsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" Component={App}>
      <Route path="trumpetPage" Component={TrumpetPage} />
      <Route path="trombonePage" Component={TrombonePage} />
      <Route path="saxophonePage" Component={SaxophonePage} />
      <Route path="clarinetPage" Component={ClarinetPage} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
