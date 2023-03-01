import React from "react";
import styled from "styled-components/macro";

import { QUERIES, WEIGHTS } from "../../constants";

import Breadcrumbs from "../Breadcrumbs";
import Select from "../Select";
import Spacer from "../Spacer";
import ShoeSidebar from "../ShoeSidebar";
import ShoeGrid from "../ShoeGrid";

const ShoeIndex = ({ sortId, setSortId }) => {
  return (
    <Wrapper>
      <MainColumn>
        <Header>
          <Title>Running</Title>
          <Select
            label="Sort"
            value={sortId}
            onChange={(ev) => setSortId(ev.target.value)}
            css={{ [QUERIES.phone]: { display: "none" } }}
          >
            <option value="newest">Newest Releases</option>
            <option value="price">Price</option>
          </Select>
          <ShoeIndexBreadcrumbs hideOnDesktop />
        </Header>
        <Spacer size={32} />
        <ShoeGrid />
      </MainColumn>
      <LeftColumn>
        <ShoeIndexBreadcrumbs />
        <Spacer size={42} />
        <ShoeSidebar />
      </LeftColumn>
    </Wrapper>
  );
};

const ShoeIndexBreadcrumbs = ({ hideOnDesktop }) => {
  return (
    <StyledBreadcrumbs hideOnDesktop={hideOnDesktop}>
      <Breadcrumbs.Crumb href="/">Home</Breadcrumbs.Crumb>
      <Breadcrumbs.Crumb href="/sale">Sale</Breadcrumbs.Crumb>
      <Breadcrumbs.Crumb href="/sale/shoes">Shoes</Breadcrumbs.Crumb>
    </StyledBreadcrumbs>
  );
};

const StyledBreadcrumbs = styled(Breadcrumbs)`
  ${(p) => p.hideOnDesktop && "display: none;"}

  ${QUERIES.tabletAndBelow} {
    display: flex;
    position: absolute;
    top: -16px;
    left: 0;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: baseline;
  gap: 32px;
`;

const LeftColumn = styled.div`
  flex-basis: 248px;

  ${QUERIES.tabletAndBelow} {
    display: none;
  }
`;

const MainColumn = styled.div`
  flex: 1;
`;

const Header = styled.header`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: ${WEIGHTS.medium};
`;

export default ShoeIndex;
