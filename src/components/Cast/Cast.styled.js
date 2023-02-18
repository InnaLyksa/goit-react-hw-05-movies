import styled from 'styled-components';
export const List = styled.ul`
  /* list-style: none;
  display: grid;
  grid-column-gap: 16px;
  grid-row-gap: 32px;
  grid-template-columns: repeat(5, 1fr); */

  display: grid;
  max-width: calc(100vw - 64px);
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));

  /* grid-template-columns: repeat(4, 1fr); */
  grid-gap: 16px;
  margin-bottom: 0;
  padding: 0;
  list-style: none;
  margin-left: auto;
  margin-right: auto;
`;
export const Wraper = styled.div`
  padding-left: 6px;
  margin-top: 10px;
`;
export const ImageItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  /* gap: 10px; */
  img {
    display: block;
    width: 100%;
    /* height: auto; */
    height: 260px;
    object-fit: cover;
  }
`;
