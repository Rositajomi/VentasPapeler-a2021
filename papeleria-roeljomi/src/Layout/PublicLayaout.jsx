import React from 'react'

const PublicLayout = ({children}) => {
    return (
        <div>
            <Navbars />
            Estas en PublicLayout
            {children}
        </div>
    )
}
export default PublicLayout