import { useState, useEffect, lazy, Suspense } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getTrendingMovies } from '../../servises/servises-api';
import { Loader } from '../../components/Loader/Loader';
import { Title } from './Home.styled';

const MovieList = lazy(() => import('../../components/MovieList/MovieList'));

const Home = () => {
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
export default Home;
