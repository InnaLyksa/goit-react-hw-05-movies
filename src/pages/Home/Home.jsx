import { useState, useEffect, lazy, Suspense } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getTrendingMovies } from '../../components/servises/servises-api';
import { Loader } from '../../components/Loader/Loader';
import { Title } from './Home.styled';

const MovieList = lazy(() => import('../../components/MovieList/MovieList'));

export const Home = () => {
  const [trendMovies, setTrendMovies] = useState(null);

  useEffect(() => {
    getTrendingMovies()
      .then(res => setTrendMovies(res))
      .catch(() => toast.error('Sorry, there are not trending movies'));
  }, []);

  return (
    <>
      {trendMovies && <Title>Trending today</Title>}
      <Suspense fallback={<Loader />}>
        {trendMovies && <MovieList movies={trendMovies} />}
      </Suspense>
      <ToastContainer autoClose={3000} />
    </>
  );
};

// import { useEffect, useState, Suspense } from 'react';

// import { Title } from './Home.styled';
// import { MovieList } from '../../components/MovieList/MovieList';

// import { getTrendingMovies } from '../../components/servises/servises-api';

// import { Loader } from 'components';

// // const MovieList = lazy(() => import('../../components/MovieList/MovieList'));

// export const Home = () => {
//   const [movies, setMovies] = useState([]);

//   useEffect(() => {
//     getTrendingMovies().then(response => setMovies(response));
//   }, []);
//   return (
//     <>
//       <Title>Trending today</Title>
//       <Suspense fallback={<Loader />}>
//         <MovieList movies={movies} />
//       </Suspense>
//     </>
//   );
// };
