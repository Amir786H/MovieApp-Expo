import axios from "axios";
import { apiKey } from "../constants";

//EndPoints
const apiBaseUrl = "https://api.themoviedb.org/3";
const trendingMoviesEndpoint = `${apiBaseUrl}/trending/movie/day?api_key=${apiKey}`;
const upcomingMoviesEndpoint = `${apiBaseUrl}/movie/upcoming?api_key=${apiKey}`;
const topRatedMoviesEndpoint = `${apiBaseUrl}/movie/top_rated?api_key=${apiKey}`;
const searchMoviesEndPoint = `${apiBaseUrl}/search/movie?api_key=${apiKey}`;

//Dynamic EndPoints
const movieDetailsEndPoint = id => `${apiBaseUrl}/movie/${id}?api_key=${apiKey}`;
const movieCreditsEndPoint = id => `${apiBaseUrl}/movie/${id}/credits?api_key=${apiKey}`;
const similarMoviesEndPoint = id => `${apiBaseUrl}/movie/${id}/similar?api_key=${apiKey}`;

const personDetailsEndpoint = id => `${apiBaseUrl}/person/${id}?api_key=${apiKey}`;
const personMoviesEndpoint = id => `${apiBaseUrl}/person/${id}/movie_credits?api_key=${apiKey}`;


export const image500 = path => path ? `https://image.tmdb.org/t/p/w500/${path}` : null;
export const image342 = path => path ? `https://image.tmdb.org/t/p/w342/${path}` : null;
export const image185 = path => path ? `https://image.tmdb.org/t/p/w185/${path}` : null;

export const fallbackMoviePoster = "https://assets-global.website-files.com/6009ec8cda7f305645c9d91b/6408f676b5811234c887ca62_top%20gun%20maverick-min.png";
export const fallbackPersonImage = "https://png.pngtree.com/png-vector/20220607/ourmid/pngtree-person-gray-photo-placeholder-man-silhouette-on-white-background-png-image_4853539.png";

const apiCall = async (endpoint, params) => {
  const options = {
    method: "GET",
    url: endpoint,
    params: params ? params : {},
  };
  // console.log('OPTIONS:: ',options);
  try {
    const response = await axios.request(options);
    // console.log('RESPONSE:::::::', response);
    return response.data;
  } catch (error) {
    console.log("error", error);
    return {};
  }
}

export const fetchTrendingMovies = () => {
    return apiCall(trendingMoviesEndpoint);
}
export const fetchUpcomingMovies = () => {
    return apiCall(upcomingMoviesEndpoint);
}
export const fetchTopRatedMovies = () => {
    return apiCall(topRatedMoviesEndpoint);
}

//
export const fetchMovieDetails = id => {
  return apiCall(movieDetailsEndPoint(id));
}
export const fetchMovieCredits = id => {
  return apiCall(movieCreditsEndPoint(id));
}
export const fetchSimilarMovies = id => {
  return apiCall(similarMoviesEndPoint(id));
}

//

export const fetchPersonDetails = id => {
  return apiCall(personDetailsEndpoint(id));
}
export const fetchPersonMovies = id => {
  return apiCall(personMoviesEndpoint(id));
}
//
export const searchMovies = params => {
  return apiCall(searchMoviesEndPoint, params);
}