import React from 'react';
import {connect} from 'react-redux';
import {startLogin} from '../actions/auth';

export const LoginPage = ({startLogin}) => (//{startLogin} can be replaced by props
    <div>
        <button onClick={startLogin}>Login</button> 
    </div>
);// is the argument is props not {startLogin} onClick should be props.startLogin

const mapDispatchToProps = (dispatch) =>({
    startLogin:()=>dispatch(startLogin())
})

export default connect(undefined,mapDispatchToProps)(LoginPage);
// here we dont have map state to props