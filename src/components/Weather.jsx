// Компонент погоды.
// Принимает иконку, температуру и описание

import styled from "styled-components";
import { Typography } from "./Typography";

const StyledWeather = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const StyledIcon = styled.div`
  width: 48px;
  height: 48px;

  background-color: #3f2e8d;
`;

const Weather = (props) => {
  return (
    <StyledWeather>
      <StyledIcon />
      <Typography>+ 17</Typography>
      {[{}].map(() => (
        <>
          Доп информация
        </>
      ))}
    </StyledWeather>
  );
};

export { Weather };
