import React from 'react'
import { Navigate } from 'react-router-dom'
export default function ProtectedRoute({user,children}) {
  
    if(!user)
    {
     return <Navigate to="/not_connected"/>;
    }
    return children;
}