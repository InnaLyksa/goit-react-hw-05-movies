import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';

import { StyledLink, StyledItem, MovieImg } from './MovieList.styled';
import { POSTER_URL } from '../../components/servises/poster-url';

const DEFAULT_FOTO =
  'http://placehold.it/120x67.png/aaa698/ffffff&text=No image((';

const MovieList = ({ movies }) => {
  const location = useLocation();

  return (
    <ul>
      {movies.map(({ title, id, backdrop_path }) => (
        <StyledItem key={id}>
          <StyledLink to={`/movies/${id}`} state={{ from: location }}>
            {backdrop_path && (
              <MovieImg src={`${POSTER_URL}${backdrop_path}`} alt={title} />
            )}
            {!backdrop_path && <MovieImg src={DEFAULT_FOTO} alt={title} />}
            {title}
          </StyledLink>
        </StyledItem>
      ))}
    </ul>
  );
};

MovieList.propTypes = {
  movies: PropTypes.array.isRequired,
};

export default MovieList;
