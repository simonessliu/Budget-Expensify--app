import React from 'react';
import {connect} from 'react-redux';
import {startLogin} from '../actions/auth';

export const LoginPage = ({startLogin}) => (//{startLogin} can be replaced by props
    <div className="box-layout">
        <div className="box-layout__box">
            <h1 className = "box-layout__title">Expensify</h1>
            <p>It's time to get your expenses under control.</p>
            <button className="button" onClick={startLogin}>Login with Google</button> 
        </div>
     
    </div>
);// is the argument is props not {startLogin} onClick should be props.startLogin

const mapDispatchToProps = (dispatch) =>({
    startLogin:()=>dispatch(startLogin())
})

export default connect(undefined,mapDispatchToProps)(LoginPage);
// here we dont have map state to props