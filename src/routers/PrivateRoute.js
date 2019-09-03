import React from 'react';
import { connect } from 'react-redux';
import {Route, Redirect} from 'react-router-dom';
import Header from '../components/Header';

export const PrivateRoute = ({
    isAuthenticated,
    component:Component,
    ...rest //get all the rest of the props like exact and path except isauth and component from approuter
}) => (
    <Route {...rest} component={(props)=>(
        isAuthenticated ? (
            <div>
                <Header />
                <Component {...props} />
            </div>
        ) : (
            <Redirect to='/' />
        )
    )}/>
);
// over all its hard to understand here
// it's a higher order component.
// isAuth is coming rom the redux store
// componenet:Component is coming from the approuter.js <PrivateRoute component={AddExpensepage}/> for example
// the reason why we followed an upper case Component here is because the privateRoute props 'component' requires an real Component as value
// thats why private route is a HOC, cause we are puting and Component as an argument in here.
// so the props here /<Route {...rest} component={(props) => /  come from  whatever props that are passed to the component in AppRouter.js  


const mapStateToProps = (state) =>({
    isAuthenticated: !!state.auth.uid // switch uid value to bool
})

export default connect(mapStateToProps)(PrivateRoute);