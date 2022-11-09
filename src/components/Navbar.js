import React from 'react'
import styled from 'styled-components/macro'
import Img from '../assets/logo.svg';
import {Link} from 'react-router-dom';


const NavbarContainer =styled.div`
width:100%;
height:85px;
background:#fff;
z-index:20;
`
const NavbarWrap =styled.div`
width:100%;
heigth:100%;
margin: 0 auto;
z-index:20;
display:flex;
position: relative;
align-item:center;
justify-content:space-between;
`
const Logo =styled.div`
padding-top:30px;
width:128px;
height:22px;
background: url(${Img}) 0 45% no-repeat;
background-size: 100% 100%;
cursor: pointer;
`
const Nav =styled.div`
flex:1;
position: relative;
padding-left:50px;
`

const NavLink =styled(Link)`
color:#000;
padding:0 15px;
font-size:16px;
line-height:60px;
font-weight:700;
text-decoration:none;

`
const Search=styled.div`
padding-top:11px;
position :relative;
`
const SearchWrap =styled.div`
width: 220px;
height: 36px;
position: relative;

box-sizing: border-box;
background: rgba(179, 191, 201, 0.15);
line-height:33px;
padding-left:20px;
border-radius:21px;


`
const Input =styled.input`
color:#000;
width:196px;
border:transparent;
font-size: 12px;
background:transparent;
outline:none;
&::placeholder{
    color:#d1d8de;   
}

`
const ButtonContainer =styled.div`
display:flex;
align-items:center;
justify-content:flex-end;

`
const Button =styled.div`
width:110px;
color:#fff;
cursor:pointer;
height:36px;
font-size:16px;
box-sizing:border-box;
background:#007cff;
text-align:center;
line-height:36px;
border-radius:19px;

`


const Navbar = () => {
  return (
    <NavbarContainer>
        <NavbarWrap>
            <Logo/>
            <Nav>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/'>Market</NavLink>
                <NavLink to='/'>Trade</NavLink>
                <NavLink to='/'>Pricnig</NavLink>
                <NavLink to='/'>Download</NavLink>  
                <NavLink to='/'>Helpe</NavLink>
            </Nav>
            <Search>
                <SearchWrap>
                    <Input type='text'placeholder='serach by name'/>
                </SearchWrap>
            </Search>
            <ButtonContainer>
                <Button css={`
                color:#037;
                background:#fff;
                `}>Sign up</Button>
                <Button>Log In</Button>
            </ButtonContainer>
        </NavbarWrap>
    </NavbarContainer>
          )
}

export default Navbar