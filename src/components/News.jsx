// Компонент списка новостей.
// Принимает в пропсах набор новостей и рендерит их,
// соответственно, так можно отрендерить как одну, так и несколько новостей

import styled from "styled-components";
import { Typography } from "./Typography";

const StyledNews = styled.div`
  display: grid;
  gap: 12px;
`;

const StyledNew = styled.div`
  position: relative;

  display: flex;
  align-items: center;
  gap: 8px;
`;

const StyledIconWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: -16px;
  transform: translateY(-50%);
`;

const StyledIcon = styled.div`
  width: 8px;
  height: 8px;

  background-color: #263087;
`;

const News = (props) => {
  return (
    <StyledNews>
      {[{}].map(() => (
        <StyledNew>
          <StyledIconWrapper>
            <StyledIcon />
          </StyledIconWrapper>
          <Typography>Заголовок новости</Typography>
        </StyledNew>
      ))}
    </StyledNews>
  );
};

export { News };
