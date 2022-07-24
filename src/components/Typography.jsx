// Компонент типографики. Используется для работы со всеми шрифтами проекта
// Принимает любой дочерний элемент содержащий в себе текст

import styled from "styled-components";

const StyledTypography = styled.div``;

const Typography = (props) => {
  const { children } = props;
  return <StyledTypography>{children}</StyledTypography>;
};

export { Typography };
