import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

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
export const StyledItem = styled.li`
  color: inherit;
  &:not(:last-child) {
    margin-bottom: 12px;
  }
`;
