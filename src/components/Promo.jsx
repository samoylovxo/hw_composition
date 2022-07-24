// Компонент промо новости. Принимает линк картинки, залоговок и описание

import styled from "styled-components";
import { Typography } from "./Typography";

const StyledPromo = styled.div`
  display: grid;
  gap: 12px;
`;

const StyledImage = styled.div`
  width: 100px;
  height: 100px;

  border-radius: 50%;

  background-color: #24b027;
`;

const Promo = (props) => {
  return (
    <StyledPromo>
      <StyledImage />
      <Typography>Работа над ошибками</Typography>
      <Typography>Смотрите на Яндекс</Typography>
    </StyledPromo>
  );
};

export { Promo };
