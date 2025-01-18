import React, { useEffect, useState } from 'react'
import { API_OPTIONS, MOVIE_LOGO_IMAGE_API } from '../utils/constants';

const useGetMovieLogo = (id) => {

    const [logo, setLogo] = useState(null);
    const getMovieLogo = async () => {
        const data = await fetch(MOVIE_LOGO_IMAGE_API + id + "/images", API_OPTIONS);
        const json = await data.json();
        setLogo(json?.logos[0]?.file_path)
    }

    useEffect(() => {
        getMovieLogo();
    }, [])

    return logo;
}

export default useGetMovieLogo