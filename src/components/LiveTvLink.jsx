// Компонент ссылки на тв передачу в прямом эфире
// Принимает иконку, заголовок, описание и линк

import styled from "styled-components";
import { Typography } from "./Typography";

const StyledLiveTvLink = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const StyledIcon = styled.div`
  width: 8px;
  height: 8px;

  background-color: #333bb0;
`;

const LiveTvLink = (props) => {
  return (
    <StyledLiveTvLink>
      <StyledIcon />
      <Typography>Управление как искусство</Typography>
      <Typography>Успех</Typography>
    </StyledLiveTvLink>
  );
};

export { LiveTvLink };
