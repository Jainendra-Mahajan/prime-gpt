export const HEADER_LOGO = "https://prime-gpt.web.app/assets/prime-logo-CQoKYFUH.svg";
export const LOGIN_BACKGROUND = "https://m.media-amazon.com/images/G/01/primevideo/seo/primevideo-seo-logo.png";
export const USER_LOGO = "https://m.media-amazon.com/images/G/02/CerberusPrimeVideo-FN38FSBD/adult-1.png";
export const API_OPTIONS = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer ' + import.meta.env.VITE_TMDB_API_KEY
    }
};

export const NOW_PLAYING_MOVIES_API = "https://api.themoviedb.org/3/discover/movie?include_video=true&language=IN-hi&page=1&region=IN&release_date.gte=2017-08-01&sort_by=popularity.desc&with_original_language=hi"
export const MOVIE_LOGO_IMAGE_API = "https://api.themoviedb.org/3/movie/"
export const MOVIE_TITLE_LOGO_API = "https://image.tmdb.org/t/p/original/"
export const MOVIE_POSTER_500_PX_API = "https://image.tmdb.org/t/p/w500/"
export const GPT_BACKGROUND = "https://prime-gpt.web.app/assets/GPT-banner-Cvc3zqun.png"

export const SUPPORTED_LANGUAGE = [
    { identifier: "en", language: "English" },
    { identifier: "hindi", language: "Hindi" },
    { identifier: "marathi", language: "Marathi" }
]

export const LANDING_PAGE_IMAGE_1 = "https://raw.githubusercontent.com/rishav-learnerml/prime-gpt/refs/heads/master/src/assets/banner-1.jpeg"
export const LANDING_PAGE_IMAGE_2 = "https://raw.githubusercontent.com/rishav-learnerml/prime-gpt/refs/heads/master/src/assets/banner-2.jpeg"
export const LANDING_PAGE_IMAGE_3 = "https://raw.githubusercontent.com/rishav-learnerml/prime-gpt/refs/heads/master/src/assets/firestick-bg.jpeg"
export const SEARCH_SUGGESTION_API = "https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q="

export const BANNER_VALUE = [
    {
        imgId: "https://raw.githubusercontent.com/rishav-learnerml/prime-gpt/refs/heads/master/src/assets/banner-1.jpeg",
        title: "Welcome to Prime Video",
        description: "Watch the latest movies, TV shows, and award-winning Amazon Originals",
        buttonValue: "Sign in to join Prime"
    },
    {
        imgId: "https://raw.githubusercontent.com/rishav-learnerml/prime-gpt/refs/heads/master/src/assets/banner-2.jpeg",
        title: "Movie rentals on Prime Video",
        description: "Early Access to new movies, before digital subscription",
        buttonValue: "Rent Now"
    }
]