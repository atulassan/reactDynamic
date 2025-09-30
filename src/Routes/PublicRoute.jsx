import React, { Fragment } from 'react';
import { useAuth } from "../Components/Modules/AuthContext";
import { Navigate } from 'react-router-dom';

function PublicRoute({children}) {

    const { isAuthenticated } = useAuth();

    return (
        <Fragment>  
            { isAuthenticated ? <Navigate to="/dashboard" /> : children }
        </Fragment>
        
    );          
}

export default PublicRoute;