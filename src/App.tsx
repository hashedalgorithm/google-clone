import React from "react";
import "./App.css";
import Home from "./Home";
import SearchResult from "./SearchResults";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { StateProvider } from "./UseStateAndDispatch";

function App() {
  return (
    <StateProvider>
      <div className="App">
        <Router>
          <Switch>
            <Route path="/" exact>
              <Home></Home>
            </Route>
            <Route
              path="/search/:data"
              children={<SearchResult></SearchResult>}
            ></Route>
          </Switch>
        </Router>
      </div>
    </StateProvider>
  );
}

export default App;
