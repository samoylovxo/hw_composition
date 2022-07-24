// Компонент навигации.
// Принимает заголовок, опциональный бейдж и любой дочерний компонент

import styled from "styled-components";
import { Typography } from "./Typography";

const StyledNavigation = styled.div`
  display: grid;
  gap: 24px;
`;

const Navigation = (props) => {
  const { children } = props;
  return (
    <StyledNavigation>
      <Typography>Любой заголовок</Typography>

      {children}
    </StyledNavigation>
  );
};

export { Navigation };
