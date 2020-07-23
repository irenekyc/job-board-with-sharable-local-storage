import styled from 'styled-components';

import Logo from './Logo';
import SearchBar from './SearchBar';
import User from './User'


const NavBar = () => {
    const Nav = styled.nav`
    display:grid;
    grid-template-columns: 100px 1fr 100px;
    place-items:center;
    top:0;
left:0;
padding: 0 60px;
width:100vw;
    position:fixed;
    box-shadow: 5px 5px 10px rgba(0,0,0,0.05);
    height: 60px;
    background: white;`
    return <Nav>
        <Logo />
        <SearchBar />
        <User />
    </Nav>

}

export default NavBar