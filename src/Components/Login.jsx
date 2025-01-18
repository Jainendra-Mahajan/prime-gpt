import React, { useRef, useState } from 'react'
import Header from './Header'
import { LOGIN_BACKGROUND } from '../utils/constants'
import { validate } from '../utils/validate'
import { auth } from '../utils/firebase'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { addUser } from '../utils/userSlice'

const Login = () => {
    // console.log(userInfo);

    const [isSignIn, setIsSignIn] = useState(true)
    const [validateMessage, setValidateMessage] = useState(null);

    const emailRef = useRef(null);
    const nameRef = useRef(null);
    const passwordRef = useRef(null);

    const toggleSignInForm = () => {
        setIsSignIn(!isSignIn);
    }

    const handleSubmit = () => {
        let message = "";
        {
            isSignIn ? message = validate(emailRef.current.value, passwordRef.current.value, null) :
                validate(emailRef.current.value, passwordRef.current.value, nameRef.current.value)
        }

        setValidateMessage(message);
        if (message) return;

        if (!isSignIn) {
            createUserWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value)
                .then((userCredential) => {
                    // Signed up 
                    const user = userCredential.user;
                    updateProfile(user, {
                        displayName: nameRef.current.value
                    }).then(() => {
                        const { uid, email, displayName } = auth.currentUser;
                        dispatch(addUser({ uid: uid, email: email, displayName: displayName, }));
                    }).catch((error) => {
                        setValidateMessage(error.message)
                    });

                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setValidateMessage(errorCode + " " + errorMessage)
                });

        }
        else {
            signInWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setValidateMessage("Invalid Credentials")
                });
        }
    }
    return (
        <div className='bg-black'>
            <Header />
            <div>
                <img src={LOGIN_BACKGROUND} alt="Login Background" className='w-full absolute' />
            </div>

            <form onSubmit={(e) => { e.preventDefault() }}
                className='text-white pt-5 my-40 w-3/12 mx-auto right-24 absolute bg-black flex flex-col opacity-90 rounded-lg'>
                <h1 className='text-center font-bold text-xl'>{isSignIn ? "Sign In" : "Sign Up"}</h1>

                <input type="text" placeholder='Email Address' ref={emailRef}
                    className='m-4 p-2 rounded-md bg-gray-600' />

                {!isSignIn && <input type="text" placeholder='Name' ref={nameRef}
                    className='m-4 p-2 rounded-md bg-gray-600' />}

                <input type="password" placeholder='Password' ref={passwordRef}
                    className='m-4 p-2 rounded-md bg-gray-600' />

                <button className='bg-[#1399FF] text-white m-4 p-2 rounded-lg' onClick={handleSubmit}
                >Sumbit</button>

                {validateMessage !== null && <p className='ml-3 p-2 text-red-600 font-bold'>{validateMessage}</p>}

                <p className='p-1 ml-4 mb-10'>
                    {isSignIn && <span>Not a Prime Member? </span>}
                    {isSignIn && <span onClick={toggleSignInForm} className='hover:text-[#1399FF] cursor-pointer'>Join Prime Now</span>}

                    {!isSignIn && <span>Already a user!</span>}
                    {!isSignIn && <span onClick={toggleSignInForm} className='hover:text-[#1399FF] cursor-pointer'> Sign In</span>}
                </p>

            </form>
        </div >
    )
}

export default Login