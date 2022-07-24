// Компонент валюты. Принимает данные валюты

import styled from "styled-components";
import { Typography } from "./Typography";

const StyledCurrency = styled.div``;

const StyledContent = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const Currency = (props) => {
  return (
    <StyledCurrency>
      <StyledContent>
        <Typography>USD</Typography>
        <Typography>+0.9</Typography>
      </StyledContent>
    </StyledCurrency>
  );
};

export { Currency };
