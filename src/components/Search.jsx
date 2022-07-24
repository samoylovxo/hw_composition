// Компонент поиска.
// Принимает пропсы аналогичные инпуту, но дополнительно есть описание и обработчики нажатия на кнопку "Поиск", "Очистить поле" и побочные дейтсвия

import styled from "styled-components";

const StyledSearch = styled.div`
  display: flex;
  align-items: flex-end;
`;

const StyledInput = styled.input`
  padding: 8px 16px;
  width: 100%;
`;

const StyledButton = styled.button`
  width: max-content;

  padding: 8px 16px;
`;

const Search = (props) => {
  return (
    <StyledSearch>
      <StyledInput />
      <StyledButton>Поиск</StyledButton>
    </StyledSearch>
  );
};

export { Search };
