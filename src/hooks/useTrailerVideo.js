import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addMovieTrailer } from "../utils/moviesSlice";

const useTrailerVideo = (movieId) => {

    const dispatch = useDispatch();
    const movieTrailer = useSelector(store => store.movies.movieTrailer)


    const getMovieTrailer = async () => {
        const data = await fetch("https://api.themoviedb.org/3/movie/" + movieId + "/videos?language=en-US", API_OPTIONS);
        const json = await data.json();

        const getMovieTrailer = json.results.filter(trailer => trailer.type === "Trailer");

        const trailer = getMovieTrailer.length === 0 ? json.results[0] : getMovieTrailer[1];

        dispatch(addMovieTrailer(trailer));
    }

    useEffect(() => {
        !movieTrailer && getMovieTrailer();
    }, [])
}
export default useTrailerVideo;
