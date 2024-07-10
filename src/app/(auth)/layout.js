import GustRoute from '@/provider/GustRoute'
import React from 'react'

const AuthLayout = ({ children }) => {
    return (
        <GustRoute>{children}</GustRoute>
    )
}

export default AuthLayout