/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components/macro";
import { DialogOverlay, DialogContent } from "@reach/dialog";

import UnstyledButton from "../UnstyledButton";
import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";
import { COLORS } from "../../constants";
import { Nav } from "../Nav/Nav";

const MobileMenu = ({ isOpen, onDismiss }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <Overlay onDismiss={onDismiss}>
      <Content>
        <CloseButton onClick={onDismiss}>
          <VisuallyHidden>DismissMenu</VisuallyHidden>
          <Icon id="close" />
        </CloseButton>
        <Edge />

        <MobileMenuNav css={{ flexDirection: "column" }} />

        <Edge>
          <Footer css={{ marginTop: "auto" }}>
            <a href="/terms">Terms and Conditions</a>
            <a href="/privacy">Privacy Policy</a>
            <a href="/contact">Contact Us</a>
          </Footer>
        </Edge>
      </Content>
    </Overlay>
  );
};

export default MobileMenu;

const CloseButton = styled(UnstyledButton)`
  position: absolute;
  top: 32px;
  right: 22px;
`;

const Overlay = styled(DialogOverlay)`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background: rgba(96, 100, 108, 0.8);
`;

const Content = styled(DialogContent)`
  background: ${COLORS.white};
  position: absolute;
  top: 0;
  right: 0;
  width: 300px;
  max-width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 32px;
`;

const MobileMenuNav = styled(Nav)`
  flex-direction: column;
  gap: 0;
  a {
    padding-top: 10px;
    padding-bottom: 10px;
  }
`;

const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 14px;
  height: 100%;

  a {
    color: ${COLORS.gray[700]};
    text-decoration: none;
    :hover {
      text-decoration: revert;
    }
  }
`;

const Edge = styled.div`
  flex: 1;
`;
