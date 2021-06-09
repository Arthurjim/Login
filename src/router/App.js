import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import Dashboard from "../containers/Dashboard";
import FormNotes from "../containers/FormNotes";
import Login from "../containers/Login";
import Register from "../containers/Register";
import AppContext from "../context/ContextHook";
import useInitialState from '../hooks/useInitialState'
const App = () => {
    const initialState = useInitialState();
  return (
    <HashRouter>
      <AppContext.Provider value={initialState}>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/dash/" component={Dashboard} />
          <Route exact path="/newnote" component={FormNotes} />
        </Switch>
      </AppContext.Provider>
    </HashRouter>
  );
};
export default App;
