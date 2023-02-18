import styled from 'styled-components';

export const SectionSearch = styled.section`
  top: 0px;
  left: 0px;
  position: sticky;
  z-index: 2;
  display: flex;
  align-items: center;
  width: 100vw;
  min-height: 48px;
  padding: 15px 24px 15px 40px;
  margin-bottom: 20px;
  background-color: rgb(240, 240, 240);
  box-shadow: rgb(0 0 0 / 20%) 0px 1px 3px 0px, rgb(0 0 0 / 14%) 0px 1px 1px 0px,
    rgb(0 0 0 / 12%) 0px 2px 1px -1px;
`;

export const Form = styled.form`
  display: flex;
  gap: 10px;
  width: 100%;
  max-width: 600px;

  border-radius: 4px;
  overflow: hidden;
`;

export const SearchInput = styled.input`
  display: inline-block;
  width: 100%;

  padding-left: 8px;
  padding-right: 8px;
  border: none;
  font-size: 24px;
`;

export const StyledItem = styled.li`
  color: inherit;
  &:not(:last-child) {
    margin-bottom: 12px;
  }
`;
