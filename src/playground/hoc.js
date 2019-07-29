//Higher order component( hoc) -- a component(hoc) that renders another component
//Reuse code
//render hijacking
//prop manipulation
//abstract state

import React from 'react';
import ReactDOM from 'react-dom';

//--this is the common component 
const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The Info is: {props.info}</p>
    </div>
);

const withAdminWarning = (WrappedComponent) => {
    return  (props) => (
        <div>
            { props.isAdmin && <p>This is private info plz dont show</p>}
            <WrappedComponent {...props}/> 
        </div>
    );
};
//the props above in the warpped comp means we are taking all of the props that passed into
//this higher order comp ( which is return (props) ) and we are directly passing them down to the child
const AdminInfo = withAdminWarning(Info);



ReactDOM.render(<AdminInfo isAdmin = {false} info = "This is the detail"/>, document.getElementById('app'));

 