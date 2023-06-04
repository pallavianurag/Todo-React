/*import React from "react"
import { Route, Navigate } from "react-router-dom"
import { useAuth } from "../contexts/AuthContext"

export default function PrivateRoute({ component: Component, ...rest }) {
  const { currentUser } = useAuth()

  return (
    <Route
      {...rest}
      render={props => {
        return currentUser ? <Component {...props} /> : <Navigate to="/login" />
      }}
    ></Route>
  )
}*/
import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from "../contexts/AuthContext"
const PrivateRoute = () => {
    const { currentUser } = useAuth(); 
    return currentUser ? <Outlet /> : <Navigate to="/login" />;
}

export default PrivateRoute