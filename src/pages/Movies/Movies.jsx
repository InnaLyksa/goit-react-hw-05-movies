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
  const [moviesByQuery, setMoviesByQuery] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get('query');

  useEffect(() => {
    if (!query) {
      return;
    }
    SearchMoviesFetch(query).then(res => setMoviesByQuery(res));
  }, [query]);

  const handleSubmit = e => {
    e.preventDefault();

    if (searchQuery === '') {
      toast.warn('Enter something');
      // setMoviesByQuery([]);
      return;
    }

    if (searchQuery !== query) {
      setSearchQuery(searchQuery);
      setSearchParams({ query: searchQuery });
    } else {
      toast.warn('The new search must be different from the current search');
      setSearchQuery('');
      e.target.reset();
    }
  };

  const handleInputChange = e => {
    setSearchQuery(e.target.value.trim());
  };

  return (
    <>
      <SectionSearch>
        <Form onSubmit={handleSubmit}>
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
        {moviesByQuery && <MovieList movies={moviesByQuery} />}
      </Suspense>
      <ToastContainer autoClose={3000} />
    </>
  );
};
