// Компонент ссылки на тв передачу.
// Принимает время, заголовок, описание и линк

import styled from "styled-components";
import { Typography } from "./Typography";

const StyledTvLink = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const TvLink = (props) => {
  return (
    <StyledTvLink>
      <Typography>
        02:00
      </Typography>
      <Typography>
        Заголовок
      </Typography>
      <Typography>
        Описание
      </Typography>
    </StyledTvLink>
  );
};

export { TvLink };
