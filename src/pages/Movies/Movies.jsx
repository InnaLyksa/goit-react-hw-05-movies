import { useState, useEffect, Suspense, lazy } from 'react';
import { useSearchParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { SearchMoviesFetch } from '../../components/servises/servises-api';
import { SectionSearch, Form, SearchInput } from './Movies.styled';

import { IconButton } from '../../components/IconButton/IconButton';
import { ReactComponent as LoupeIcon } from '../../icons/loupe.svg';
import { Loader } from 'components';

const MovieList = lazy(() => import('../../components/MovieList/MovieList'));

export const Movies = () => {
  const [name, setName] = useState('');
  const [movies, setMovies] = useState([]);

  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get('query');

  const handleInputChange = event => {
    setName(event.currentTarget.value.toLowerCase());
  };

  const handelSubmit = event => {
    event.preventDefault();

    if (name.trim() === '') {
      toast.warn('Enter something');
      return;
    } else if (name !== query) {
      // setQuery(search);
      setSearchParams({ query: name });
    } else {
      toast.warn('The new search must be different from the current search');
    }

    // setSearchParams(query !== '' ? { query: name } : {});

    event.target.reset();
  };

  useEffect(() => {
    if (!query) return;

    SearchMoviesFetch(query).then(res => {
      setMovies(res);
    });
  }, [query]);

  return (
    <>
      <SectionSearch>
        <Form onSubmit={handelSubmit}>
          <SearchInput
            type="text"
            autoComplete="off"
            autoFocus
            onChange={handleInputChange}
            placeholder="Search movie"
            name="query"
          />
          <IconButton type="submit" aria-label="Search movies">
            <LoupeIcon width="40" height="40" />
          </IconButton>
        </Form>
      </SectionSearch>
      <Suspense fallback={<Loader />}>
        {movies && <MovieList movies={movies} />}
      </Suspense>
      <ToastContainer autoClose={3000} />
    </>
  );
};
