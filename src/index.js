import React from "react";
import ReactDOM from "react-dom";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Navigation from "./page-components/Navigation";
import { Page, NotFound } from "./pages";
import { Helmet } from "react-helmet";
import GlobalStyle from "./GlobalStyle";

// icon: type/png
// shortcut icon: ICO

const RouteWithTitle = ({ title, ...other }) => {
  React.useEffect(() => {
    document.title = "NOOX";
  }, [title]);

  return <Route {...other} />;
};

const Pages = () => {
  const [isNavigationOpen, setNavigationOpen] = React.useState(false);

  return (
    <>
      <div>
        <div className="content">
          <Switch>
            <RouteWithTitle exact path="/" component={Page} />
            <RouteWithTitle component={NotFound} />
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
      <title>RED Struss</title>
    </Helmet>

    <Pages />
  </Router>
);

ReactDOM.render(App, document.getElementById("root"));
