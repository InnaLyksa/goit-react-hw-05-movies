import { useState, useEffect, Suspense, lazy } from 'react';
import { useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';

import { SearchMoviesFetch } from '../../servises/servises-api';
import { SectionSearch, Form, SearchInput } from './Movies.styled';
import { IconButton } from '../../components/index';
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
    SearchMoviesFetch(query)
      .then(res => setMoviesByQuery(res))
      .catch(() => toast.error('Sorry, there are no movies for this search'));
  }, [query]);

  const handleSubmit = e => {
    e.preventDefault();

    if (searchQuery.trim() === '') {
      toast.warn('Enter something');
      return;
    }
    if (searchQuery !== query) {
      setSearchQuery(searchQuery);
      setSearchParams({ query: searchQuery });
    } else {
      toast.info('The new search must be different from the current search');
    }
    e.currentTarget.reset();
    setSearchQuery('');
  };

  const handleInputChange = e => {
    setSearchQuery(e.target.value.toLowerCase());
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
    </>
  );
};
export default Movies;
