import styled from 'styled-components';

export const List = styled.ul`
  padding: 0 24px;
`;
export const ReviewsItem = styled.li`
  &:not(:last-child) {
    margin-bottom: 14px;
  }
`;
export const ReviewerAuthor = styled.p`
  margin-bottom: 7px;
  font-size: 18px;
  font-weight: bold;
`;
