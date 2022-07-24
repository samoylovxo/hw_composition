import styled from "styled-components";
import { Banner } from "../components/Banner";
import { Currency } from "../components/Currency";
import { LiveTvLink } from "../components/LiveTvLink";
import { Navigation } from "../components/Navigation";
import { News } from "../components/News";
import { Promo } from "../components/Promo";
import { Search } from "../components/Search";
import { TvLink } from "../components/TvLink";
import { Typography } from "../components/Typography";
import { ViewedLink } from "../components/ViewedLink";
import { Weather } from "../components/Weather";

const StyledPageDecomposition = styled.div`
  display: grid;
  gap: 48px;

  padding: 48px;
`;

const PageDecomposition = () => {
  return (
    <StyledPageDecomposition>
      <Banner />
      <Currency />
      <LiveTvLink />
      <Navigation>
        <TvLink />
        <TvLink />
        <TvLink />
      </Navigation>
      <News />
      <Promo />
      <Search />
      <TvLink />
      <Typography />
      <ViewedLink />
      <Weather />
    </StyledPageDecomposition>
  );
};

export { PageDecomposition };
