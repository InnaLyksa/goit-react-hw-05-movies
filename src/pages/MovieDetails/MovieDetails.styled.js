import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const GoBackBtn = styled.button`
  display: flex;
  gap: 10px;
  align-items: center;
  padding: 8px 10px;
  margin: 12px 0;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  cursor: pointer;

  &:hover {
    background-color: orange;
    color: #ffff;
    svg {
      fill: #ffff;
    }
  }
`;

export const MoreInfo = styled.section`
  padding-left: 24px;
  margin-bottom: 12px;
`;

export const MoreInfoTitle = styled.p`
  font-weight: bold;
  margin-bottom: 7px;
`;

export const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: inherit;

  &.active {
    color: orange;
    text-decoration: none;
  }

  &:hover {
    color: orange;
    text-decoration: underline;
  }
`;
