import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Title = styled.h2`
  padding-left: 36px;
  margin-bottom: 12px;
  margin-top: 20px;
  font-size: 32px;
`;

export const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: inherit;
  display: flex;
  gap: 10px;
  align-items: center;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    color: orange;
    text-decoration: underline;
  }
`;

export const MovieImg = styled.img`
  display: block;
  max-width: 120px;
  height: auto;
`;
