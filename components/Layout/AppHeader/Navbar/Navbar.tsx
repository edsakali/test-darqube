import styled from 'styled-components'
import {NavLink} from "../../../ui/NavLink";

export const Navbar = () => {
    return <NavbarWrapper>
        <NavLink href="/" text="News"/>
        <NavLink href="/bookmarks" text="Bookmarks"/>
    </NavbarWrapper>
}

const NavbarWrapper = styled.div`
  display: flex;
`