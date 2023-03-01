import styled from "styled-components";
import React from "react";
import { COLORS, WEIGHTS } from "../../constants";

export const Nav = ({ className }) => {
  return (
    <Wrapper className={className}>
      <Link href="/sale">Sale</Link>
      <Link href="/new">New&nbsp;Releases</Link>
      <Link href="/men">Men</Link>
      <Link href="/women">Women</Link>
      <Link href="/kids">Kids</Link>
      <Link href="/collections">Collections</Link>
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  display: flex;
  gap: 48px;
`;

const Link = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: ${COLORS.gray[900]};
  font-weight: ${WEIGHTS.medium};

  &:first-of-type {
    color: ${COLORS.secondary};
  }
`;
