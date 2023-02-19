import { StyledLink, StyledSearchbar } from './Navigation.styled';

export const Navigation = () => {
  return (
    <>
      <StyledSearchbar>
        <nav>
          <StyledLink to="/" end>
            Home
          </StyledLink>
          <StyledLink to="/movies">Movies</StyledLink>
        </nav>
      </StyledSearchbar>
    </>
  );
};
