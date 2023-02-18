import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledSearchbar = styled.header`
  top: 0;
  left: 0;
  position: sticky;
  z-index: 1;
  display: flex;
  align-items: center;
  width: 100vw;

  padding: 25px 25px 25px 40px;

  /* margin-bottom: 12px; */
  background-color: #ebe3c8;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

export const StyledLink = styled(NavLink)`
  text-decoration: none;
  font-size: 32px;
  color: black;
  font-weight: bold;

  &:not(:last-child) {
    margin-right: 30px;
  }
  &.active {
    color: orange;
  }
  &:hover {
    text-decoration: underline;
  }
`;
