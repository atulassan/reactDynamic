import React, { Fragment } from 'react';
import { useAuth } from "../Components/Modules/AuthContext";
import { Navigate } from 'react-router-dom';

function PrivateRoute({children}) {

    const { isAuthenticated } = useAuth();

    return (
        <Fragment>  
            { isAuthenticated ? children : <Navigate to="/login" /> }
        </Fragment>
        
    );          
}

export default PrivateRoute;