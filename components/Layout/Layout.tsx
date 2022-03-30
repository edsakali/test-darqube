import { FC } from "react";
import styled from "styled-components";
import { AppHeader } from "./AppHeader/AppHeader";

export const Layout: FC = ({ children }) => {
  return (
    <LayoutWrapper>
      <AppHeader />
      <Content>{children}</Content>
    </LayoutWrapper>
  );
};

const LayoutWrapper = styled.main`
  padding: 40px 0;
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (min-width: 850px) {
    padding-bottom: 40px;
    flex-direction: row;
    grid-template-columns: 1fr 1fr;
  }
`;