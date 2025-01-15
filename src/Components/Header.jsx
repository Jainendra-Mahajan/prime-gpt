import React from 'react'
import { HEADER_LOGO, USER_LOGO } from "../utils/Constants"
import { signOut } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
    const user = useSelector(store => store.User)
    const navigate = useNavigate();

    const handleSignOut = () => {
        signOut(auth).then(() => {
            navigate("/")
        }).catch((error) => {
            navigate("/error")
        });
    }
    return (
        <div className='flex justify-between'>
            <img src={HEADER_LOGO} alt="Logo" className='w-36' />

            {user && <div className='flex justify-between '>
                <img src={USER_LOGO} alt="user_logo"
                    className='w-14 m-2  p-2' />
                <button className='m-2 pr-2' onClick={handleSignOut}>Sign Out </button>
            </div>}
        </div>
    )
}

export default Header