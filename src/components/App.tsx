import { Suspense, lazy } from "react";
import { AppContextProvider } from "../context/AppContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import Loading from "./pages/Loading";
import "bootstrap/dist/css/bootstrap-reboot.css";
import "bootstrap/dist/css/bootstrap-grid.css";

const Books = lazy(() => import("./pages/Books"));
const NotFound = lazy(() => import("./pages/NotFound"));

const GlobalStyles = createGlobalStyle`
  #root, html, body {
    min-height: 100%;
    overflow-y: auto;
  }

  body {
    font-size: 16px;
    font-family: sans-serif;
    letter-spacing: 0.1em;
  }
`;

export function App() {
  return (
    <AppContextProvider>
      <GlobalStyles />
      <Router>
        <Suspense fallback={<Loading />}>
          <Switch>
            <Route path="/" component={Books} exact />
            <Route component={NotFound} />
          </Switch>
        </Suspense>
      </Router>
    </AppContextProvider>
  );
}
