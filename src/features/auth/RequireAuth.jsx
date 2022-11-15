import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet, useLocation } from 'react-router-dom'


/**
 * Creation of a protected route that return to login page if there is no token
 * @component
 * @returns {JSX.Element} RequireAuth component
 */
const RequireAuth = () => {
  const { token } = useSelector((state) => state.userDataLogin);
  const location = useLocation(); 


    return (
      token
      ? <Outlet /> // return child path
      : <Navigate to="/login" state={{ from: location }} replace />
    )
}
export default RequireAuth