import React, { useEffect } from 'react'
import { HEADER_LOGO, SUPPORTED_LANGUAGE, USER_LOGO } from "../utils/constants"
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { gptSearchAction } from '../utils/gptSlice';
import { changeLanguage } from '../utils/configSlice';

const Header = () => {

    const user = useSelector(store => store.User)
    const gptValue = useSelector(store => store.gptSearch.showGptSearch)

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleSignOut = () => {
        signOut(auth).then(() => {
            navigate("/")
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
                navigate("/browse")

            } else {
                dispatch(removeUser());
                navigate("/")
            }
        });

        return () => unsubscribe();
    }, [])
    return (
        <div className='sticky top-0 z-50 w-full px-44 flex justify-between text-white bg-[#03152c]'>
            <button className='m-2 py-2 px-3 bg-[#03152c] text-white rounded-lg' onClick={handleGptSearch}>
                {!gptValue ? "GPT Search" : "Homepage"}
            </button>
            <img src={HEADER_LOGO} alt="Logo" className='w-36' />

            {user && <div className='flex justify-between '>
                <select className='bg-[#03152c] text-white' onChange={handleLanguageChange}>
                    {SUPPORTED_LANGUAGE.map(lang => <option key={lang.identifier} value={lang.identifier} > {lang.language}</option>)}
                </select>
                <img src={USER_LOGO} alt="user_logo"
                    className='w-14 m-2  p-2' />
                <button className='m-2 pr-2' onClick={handleSignOut}>Sign Out </button>


            </div>}
        </div>
    )
}

export default Header