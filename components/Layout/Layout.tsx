import {FC} from 'react'
import styled from "styled-components";
import {AppHeader} from "./AppHeader/AppHeader";

export const Layout: FC = ({children})=>{
    return <LayoutWrapper>
        <AppHeader/>

        {children}
    </LayoutWrapper>
}

const LayoutWrapper = styled.main`
  height: 100vh;
  padding: 40px 0;
`