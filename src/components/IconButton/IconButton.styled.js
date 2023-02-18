import styled from 'styled-components';

export const IconBtn = styled.button`
  margin: 0;
  padding: 10px;
  border: none;

  font-size: inherit;

  cursor: pointer;

  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    fill: orange;
    transform: scale(1.2);
  }
`;
