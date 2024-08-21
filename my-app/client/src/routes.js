import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import Main from './pages/Main';
import NewEmployee from './pages/NewEmployee';

const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Login} />
                <Route path="/main" component={Main} />
                <Route path="/new-employee" component={NewEmployee} />
            </Switch>
        </Router>
    );
};

export default Routes;
