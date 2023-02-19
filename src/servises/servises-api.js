import axios from 'axios';

export async function getTrendingMovies() {
  try {
    const response = await axios.get(
      'https://api.themoviedb.org/3/trending/movie/day?api_key=48b510c2367bfa7530de62f6d3fdcc31'
    );
    return response.data.results;
  } catch (error) {
    console.log(error.message);
  }
}

export async function SearchMoviesFetch(input) {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/search/movie?query=${input}&api_key=48b510c2367bfa7530de62f6d3fdcc31&language=en-US&page=1&include_adult=false`
    );
    return response.data.results;
  } catch (error) {
    console.log(error.message);
  }
}

export async function MovieDetailsFetch(id) {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=48b510c2367bfa7530de62f6d3fdcc31&language=en-US`
    );

    return response.data;
  } catch (error) {
    console.log(error.message);
  }
}

export async function MovieCreditsFetch(id) {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}/credits?api_key=48b510c2367bfa7530de62f6d3fdcc31&language=en-US`
    );

    return response.data;
  } catch (error) {
    console.log(error.message);
  }
}

export async function MovieReviewsFetch(id) {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=48b510c2367bfa7530de62f6d3fdcc31&language=en-US&page=1`
    );

    return response.data.results;
  } catch (error) {
    console.log(error.message);
  }
}
