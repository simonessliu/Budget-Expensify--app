import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The info is: {props.info}</p>
    </div>
);

const requireAuthentication = (WrappedComponent) => {
    return (props) => {
        <div>
            {props.isAuthenticated ? (
                <WrappedComponent {...props}/>
            ) : (
                <p>Plz log in to view details</p>
            )}
        </div>
    }
}


const AuthInfo = requireAuthentication(Info);

ReactDOM.render(<AuthInfo isAuthenticated = {false} info = "There are details"/>, document.getElementById('app'));