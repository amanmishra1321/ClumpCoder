import React from "react";
import { BrowserRouter, Route, Switch} from "react-router-dom";
import Login from "./component/login";
import Homepage from "./component/homepage";
import NotFound from "./component/notfound";
function App() {
  return (
    < >
    <BrowserRouter>
            <Switch>
              <Route exact path="/" component={Login} />
              <Route exact path="/homepage" component={Homepage} />
              <Route component={NotFound} />
            </Switch>
    </BrowserRouter>
    </>
  );
}

export default App;
