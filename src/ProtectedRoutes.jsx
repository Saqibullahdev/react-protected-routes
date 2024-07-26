import {Outlet,Navigate} from 'react-router-dom'
import React from 'react'
function ProtectedRoutes() {
    const [isAuthenticated, setIsAuthenticated] = React.useState(false)
    return (
        /**
         * write all authentication logic here
         * if user is authenticated then set isAuthenticated to true
         * else set it to false
         * if true children of this component will be rendered
         * else user will be redirected to login page
         */
        isAuthenticated ? <Outlet /> : <Navigate to={'/login'} replace={true} />
    )
    }

export default ProtectedRoutes