import styled from 'styled-components';
import {Navbar} from "./Navbar/Navbar";
import {Search} from "./Search/Search";

export const AppHeader = () => {

    return <Header>
        <Navbar/>
        <Search/>
    </Header>
}

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 83px; 
  padding: 0 30px;
`