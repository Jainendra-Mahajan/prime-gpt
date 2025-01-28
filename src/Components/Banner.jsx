import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router';

const Banner = ({ imgId, title, description, buttonValue }) => {
    const userInfo = useSelector(store => store?.User);
    const navigate = useNavigate();

    const handleClick = () => {
        userInfo ? navigate("/browse") : navigate("/login")
    }

    return (
        <div
            className="text-white pb-[15%] pt-[60%] md:pt-[20%] md:bg-cover relative"
            style={{
                backgroundImage: `linear-gradient( to right, #000 40%, transparent 58% ), url(${imgId})`,
            }}
        >
            <div className="absolute md:left-1 top-0 left-0 right-0 md:w-1/2 flex flex-col md:block" >
                <h1 className="mb-10 m-1 p-1 md:m-4 md:p-2 text-4xl font-thin">{title}</h1>
                <h2 className="m-1 mb-0 p-1 md:m-4 md:mb-0 md:p-2 text-2xl font-thin">{description}</h2>

                <button className="bg-sky-700 px-10 rounded-lg m-4  py-3 text-sm" onClick={handleClick}>{buttonValue}</button></div>

        </div>
    )
}

export default Banner