import React from 'react';
import { connect } from 'react-redux';
import {Route, Redirect} from 'react-router-dom';

export const PublicRoute = ({
    isAuthenticated,
    component:Component,
    ...rest //get all the rest of the props like exact and path except isauth and component from approuter
}) => (
    <Route {...rest} component={(props)=>(
        isAuthenticated ? (
            <Redirect to='/dashboard' />
        ) : (
            <Component {...props} />
        )
    )}/>
);



const mapStateToProps = (state) =>({
    isAuthenticated: !!state.auth.uid // switch uid value to bool
})

export default connect(mapStateToProps)(PublicRoute);