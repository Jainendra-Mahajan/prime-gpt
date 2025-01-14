import React from 'react'
import { HEADER_LOGO } from "../utils/Constants"

const Header = () => {
    return (
        <div className='w-36'>
            <img src={HEADER_LOGO} alt="Logo" />
        </div>
    )
}

export default Header