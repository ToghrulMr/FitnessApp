import styled from 'styled-components';

import { Link } from 'react-router-dom';
import { Container } from '../globalStyles';

export const Nav = styled.nav`
  background-color:black;
    height: 64px;
    width:100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  position: fixed;
  top: 0;
  z-index: 999;
 
`;

export const NavbarContainer = styled(Container)`
margin-left:49%;
@media screen and (max-width: 960px) {
  margin-left:19%;
}
  }
`;

export const NavLogo = styled(Link)`
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1em;
  display: flex;
  align-items: center;
  margin-left:12%;
  color:white;
  @media screen and (max-width: 960px) {
    margin-right:28%;
  }
`;


export const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 960px) {
    display: block;
    position: absolute;
    top: 0;
    margin-right:80%;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;

  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right:60px;
  font-size:15px;
  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 140vh;
    position: absolute;
    top: 60px;
    left: ${({ click }) => (click ? 0 : '-100%')};
    opacity: 1;
    transition: all 0.5s ease;
    background: black;
    
  }
`;

export const NavItem = styled.li`
  height: 90px;
  border-bottom: 2px solid transparent;
  display:flex;
  margin-top:25px;
  @media screen and (max-width: 960px) {
    width: 100%;
    
    font-size:30px;
  }
`;


export const NavLinks = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0.5rem 1rem;
  height: 80%;

  @media screen and (max-width: 960px) {
    text-align: center;
    margin-top:55%;
    width: 100%;
    display: table;
  } 
  `;


export const NavLinks1 = styled.div`
background-color:#ff5c33;
color: #fff;
display: flex;
align-items: center;
text-decoration: none;
text-align:center;
margin-top:18px;
padding-left:27px;
border-radius:75px;
width:90px;
height:40px;
cursor:pointer;
&:hover {
  background-color:black;
  color:white;
  border: 1px solid #14A800;
}
@media screen and (max-width: 960px) {
  text-align: center;
  margin-top:50%;
   height:60%;
  width: 40%;
  display: table;
  margin-left:30%;
  padding:1rem;
  
 

}
`;