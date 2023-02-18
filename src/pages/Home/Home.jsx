import { useEffect, useState, lazy, Suspense } from 'react';

import { Title } from './Home.styled';
// import { MovieList } from '../../components/MovieList/MovieList';

import { getTrendingMovies } from '../../components/servises/servises-api';

import { Loader } from 'components';

const MovieList = lazy(() => import('../../components/MovieList/MovieList'));

export const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getTrendingMovies().then(response => setMovies(response));
  }, []);
  return (
    <>
      <Title>Trending today</Title>
      <Suspense fallback={<Loader />}>
        <MovieList movies={movies} />
      </Suspense>
    </>
  );
};
