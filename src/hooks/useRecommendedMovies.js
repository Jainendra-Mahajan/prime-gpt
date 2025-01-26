import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addRecommendedMovies } from "../utils/moviesSlice";
import { useParams } from "react-router-dom";

const useRecommendedMovies = (id) => {
    const params = useParams();
    const dispatch = useDispatch();

    const getRecommendedMovies = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/' + id + '/recommendations?language=en-US&page=1', API_OPTIONS);
        const json = await data.json();

        dispatch(addRecommendedMovies(json.results))
    }
    useEffect(() => {
        getRecommendedMovies();
    }, [params])
}

export default useRecommendedMovies;