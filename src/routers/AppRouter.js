import React from 'react';
import {Router, Route, Switch,Link, NavLink} from 'react-router-dom';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import createHistory from 'history/createBrowserHistory';
import EditExpensePage from  '../components/EditExpensePage';
import AddExpensePage from '../components/AddExpensePage';
import HelpPage from '../components/HelpPage';
import NotFoundPage from '../components/NotFoundPage';
import LoginPage from '../components/LoginPage';
import PrivateRoute from './PrivateRoute'

export const history = createHistory();
//switch the browser router to the regular router 
// here we are allowed to put our own history value right here
// so intead of browser router which already has history build in
// here we used our history
// and if we export this history we can then use history props in other places which is not the component included below
const AppRouter = () => ( 
    <Router history = {history}>
        <div>     
            <Switch>
                <Route path="/" component={LoginPage} exact = {true}/>
                <PrivateRoute path="/dashboard" component={ExpenseDashboardPage} />
                <PrivateRoute path="/create" component={AddExpensePage}/>
                <PrivateRoute path="/edit/:id" component={EditExpensePage}/>
                <Route path="/help" component={HelpPage}/>
                <Route component={NotFoundPage}/>
            </Switch>
        </div>
    </Router>
);

export default AppRouter;