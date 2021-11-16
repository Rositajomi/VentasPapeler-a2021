import React from 'react'

const PrivateLayout = ({children}) => {
    return (
    <PrivateRoutes>
        <div>
            Estas en PrivateLayout
            {children}
        </div>
    </PrivateRoutes>
    )
}
export default PrivateLayout