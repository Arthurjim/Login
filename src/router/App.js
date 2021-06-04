import React from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom';
import Dashboard from '../containers/Dashboard'
import FormNotes from '../containers/FormNotes'
import Login from '../containers/Login'
import Register from '../containers/Register'

const App = ()=>{
    return(
        <HashRouter>
  
            <Switch>
                <Route exact path="/" component={Login}/>
                <Route exact path="/register" component={Register}/>
                <Route exact path="/dash/:id" component={Dashboard}/>
                <Route exact path="/newnote" component={FormNotes} />
            </Switch>
        </HashRouter>
    )
}
export default App;