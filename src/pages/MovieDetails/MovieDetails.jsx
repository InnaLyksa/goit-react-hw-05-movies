import { MovieDetailsFetch } from '../../components/servises/servises-api';
import { lazy, Suspense, useEffect, useState } from 'react';
import { Outlet, useLocation, useParams, useNavigate } from 'react-router-dom';
import { GoBackBtn, MoreInfo, MoreInfoTitle } from './MovieDetails.styled';
import { StyledLink } from '../MovieDetails/MovieDetails.styled';
import { TfiArrowLeft } from 'react-icons/tfi';
import { Loader } from '../../components/Loader/Loader';

const MovieCard = lazy(() => import('components/MovieCard/MovieCard'));

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    MovieDetailsFetch(Number(movieId)).then(response =>
      setMovieDetails(response)
    );
  }, [movieId]);

  return (
    <>
      <section>
        <GoBackBtn onClick={() => navigate(location?.state?.from ?? '/')}>
          <TfiArrowLeft />
          Go back
        </GoBackBtn>

        {movieDetails && (
          <Suspense fallback={<Loader />}>
            <MovieCard movieInfo={movieDetails} />
          </Suspense>
        )}
      </section>

      <MoreInfo>
        <MoreInfoTitle>Additional information</MoreInfoTitle>
        <ul>
          <li>
            <StyledLink to="cast" state={{ from: location.state?.from ?? '/' }}>
              Cast
            </StyledLink>
          </li>

          <li>
            <StyledLink
              to="reviews"
              state={{ from: location.state?.from ?? '/' }}
            >
              Reviews
            </StyledLink>
          </li>
        </ul>
      </MoreInfo>

      <Suspense fallback={<loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieDetails;
