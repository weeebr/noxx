import React from "react";
import ReactDOM from "react-dom";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Navigation from "./page-components/Navigation";
import { Page, NotFound } from "./pages";
import { Helmet } from "react-helmet";
import GlobalStyle from "./GlobalStyle";

// icon: type/png
// shortcut icon: ICO

const Pages = () => {
  const [isNavigationOpen, setNavigationOpen] = React.useState(false);

  return (
    <>
      <div>
        <div className="content">
          <Switch>
            <Route exact path="/" component={Page} />
            <Route component={NotFound} />
          </Switch>
        </div>
        <Navigation
          isOpen={isNavigationOpen}
          setNavigationOpen={setNavigationOpen}
        />
      </div>
    </>
  );
};

const App = (
  <Router>
    <GlobalStyle />
    <Helmet>
      <title>NOXX 🎤🪕</title>
    </Helmet>

    <Pages />
  </Router>
);

ReactDOM.render(App, document.getElementById("root"));
