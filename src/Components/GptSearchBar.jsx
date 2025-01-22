import React from 'react'
import { useSelector } from 'react-redux'
import lang from '../utils/languageConstants';

const GptSearchBar = () => {

    const languageKey = useSelector(store => store.config.lang);
    return (
        <div className='pt-[10%] flex justify-center text-lg'>
            <form className='w-1/2 grid grid-cols-12' onSubmit={(e) => e.target.value} >

                <input type="text" placeholder={lang[languageKey].placeHolder}
                    className='m-2 py-4 px-2 col-span-9 bg-gray-500 rounded-md' />

                <button className='m-2 p-2 bg-blue-400 text-white col-span-3 rounded-md' >
                    {lang[languageKey].search}
                </button>

            </form>
        </div >
    )
}

export default GptSearchBar