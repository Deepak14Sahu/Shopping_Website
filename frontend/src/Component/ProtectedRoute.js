import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'


export const ProtectedRoute = ({ children }) => {
    const is_authenticated = useSelector(state => state.account.is_authenticated)
    return is_authenticated ? children : <Navigate to='/login' />

}
export const ProtectedLoginRoute = ({ children }) => {
    const is_authenticated = useSelector(state => state.account.is_authenticated)
    return !is_authenticated ? children : <Navigate to='/products' />

}

