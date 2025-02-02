import React, { useEffect } from 'react'
import { HEADER_LOGO, SUPPORTED_LANGUAGE, USER_LOGO } from "../utils/constants"
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { gptSearchAction } from '../utils/gptSlice';
import { changeLanguage } from '../utils/configSlice';

const Header = () => {

    const user = useSelector(store => store.User)
    const gptValue = useSelector(store => store.gptSearch.showGptSearch)
    const { pathname: currentRoute } = useLocation();

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleSignOut = () => {
        signOut(auth).then(() => {
            navigate("/login")
        }).catch((error) => {
            navigate("/error")
        });
    }


    const handleGptSearch = () => {
        dispatch(gptSearchAction());
    }

    const handleLanguageChange = (e) => {
        dispatch(changeLanguage(e.target.value))
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                const { uid, email, displayName } = user;
                dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
                if (currentRoute === "/login" || currentRoute === "/") navigate("/browse")

            } else {
                dispatch(removeUser());
            }
        });

        return () => unsubscribe();
    }, [])
    return (
        <div className='fixed top-1 z-50 w-full md:px-36 flex justify-between text-white bg-slate-950 items-center'>

            <img src={HEADER_LOGO} alt="Logo" className='w-24 md:w-36' />

            {user && <div className='flex items-center justify-end'>
                <Link to="/browse"><button className='md:m-2 md:py-2 md:px-3 bg-slate-950 text-white rounded-lg text-sm md:text-base flex items-center'>
                    <svg className="mx-2 w-6 h-6 md:w-7 md:h-7 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m4 12 8-8 8 8M6 10.5V19a1 1 0 0 0 1 1h3v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h3a1 1 0 0 0 1-1v-8.5" />
                    </svg>
                    <span className='hidden md:inline-block '>Home</span>
                </button></Link>

                <Link to="/search"> <button className='md:m-2 md:py-2 md:px-3 bg-slate-950 text-white rounded-lg text-sm md:text-base flex items-center'>

                    <svg className="mx-2 w-6 h-6 md:w-7 md:h-7 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z" />
                    </svg><span className='hidden md:inline-block '>Search</span> </button></Link>

                <div className='flex'>
                    <img src={USER_LOGO} alt="user_logo"
                        className='w-10 md:w-14 m-2 p-2 mr-0' />
                    <button className='pr-2 text-sm md:text-base' onClick={handleSignOut}>Sign Out </button>

                </div>
                {currentRoute === "/search" && <select className='text-sm md:text-base bg-slate-950 text-white' onChange={handleLanguageChange}>
                    {SUPPORTED_LANGUAGE.map(lang => <option key={lang.identifier} value={lang.identifier} > {lang.language}</option>)}
                </select>}
            </div>}

        </div>
    )
}

export default Header