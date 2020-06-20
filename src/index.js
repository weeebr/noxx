import React, { useRef } from "react";
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
  const homeRef = useRef();
  const musikRef = useRef();
  const bioRef = useRef();
  const kontaktRef = useRef();
  const downloadsRef = useRef();

  const pageRefs = {
    home: homeRef,
    musik: musikRef,
    bio: bioRef,
    downloads: downloadsRef,
    kontakt: kontaktRef,
  };

  const handleNavigate = (ref) => {
    ref.current.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div>
      <div className="content">
        <Switch>
          <Route
            exact
            path="/"
            component={() => <Page pageRefs={pageRefs} />}
          />
          <Route component={NotFound} />
        </Switch>
      </div>
      <Navigation
        isOpen={isNavigationOpen}
        setNavigationOpen={setNavigationOpen}
        onNavigate={handleNavigate}
        pageRefs={pageRefs}
      />
    </div>
  );
};

const App = (
  <Router>
    <GlobalStyle />
    <Helmet>
      <title>NOXX 🥁 🎷🎤 🪕 🎹 🎸</title>
    </Helmet>

    <Pages />
  </Router>
);

ReactDOM.render(App, document.getElementById("root"));
