import React, { useEffect } from 'react'
import { HEADER_LOGO, USER_LOGO } from "../utils/constants"
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';

const Header = () => {
    const user = useSelector(store => store.User)
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleSignOut = () => {
        signOut(auth).then(() => {
            navigate("/")
        }).catch((error) => {
            navigate("/error")
        });
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                const { uid, email, displayName } = user;
                dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
                navigate("/browse")

            } else {
                dispatch(removeUser());
                navigate("/")
            }
        });

        return () => unsubscribe();
    }, [])
    return (
        <div className='w-full px-44 flex justify-between text-white  bg-[#03152c]'>
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