// Компонент баннера объявления.
// Имеет множетсво вариантов отображения, поэтому принимает проп размера (например, "s", "m", "l" и тд), линк редиректа и линк картинки

import styled from "styled-components";

const StyledBanner = styled.div`
  width: 600px;
  height: 200px;

  background-color: #d2ae91;
`;

const Banner = (props) => {
  return <StyledBanner>Banner</StyledBanner>;
};

export { Banner };
