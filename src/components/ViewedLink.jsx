// Компонент посещаемых сервисов.
// Принимает заголовок, описание и линк

import { Link } from "react-router-dom";
import styled from "styled-components";
import { Typography } from "./Typography";

const StyledViewedLink = styled.div``;

const ViewedLink = (props) => {
  return (
    <StyledViewedLink>
      <Link to="link">
        <Typography>Заголовок</Typography> - <Typography>Описание</Typography>
      </Link>
    </StyledViewedLink>
  );
};

export { ViewedLink };
