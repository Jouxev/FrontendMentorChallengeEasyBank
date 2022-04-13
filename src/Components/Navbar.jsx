import { useState } from "react";

import styled from "styled-components";
import LogoImg from "../Assets/Images/logo.svg";
import CloseBtn from "../Assets/Images/icon-close.svg";
import HamMenu from "../Assets/Images/icon-hamburger.svg";
import { mobile } from "../responsive";

const Container = styled.nav`
  height: 80px;
  width: 100%;
  background-color: var(--White);
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: sticky;
  ${mobile({
    height: "60px",
  })}
`;
const Left = styled.div``;
const Logo = styled.img`
  cursor: pointer;
`;

const Center = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  ${mobile({
    display: "none",
  })}
`;
const Links = styled.ul`
  display: flex;
  ${mobile({
    display: "block",
  })}
`;
const Link = styled.li`
  height: 80px;
  margin-right: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  list-style: none;
  font-size: 16px;
  color: var(--GrayishBlue);
  cursor: pointer;
  background-image: linear-gradient(
    90deg,
    var(--LimeGreen) 0%,
    var(--BrightCyan) 100%
  );
  background-position: bottom left;
  background-repeat: no-repeat;
  background-size: 0% 4px;
  transition: background-size 0.2 ease;
  &:hover {
    color: var(--DarkBlue);
    background-size: 100% 4px;
  }
  ${mobile({
    height: "40px",
    "&:hover": {
      backgroundSize: "0% 0px",
    },
  })}
`;
const Right = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Button = styled.button`
  border: none;
  padding: 15px 30px;
  border-radius: 25px;
  color: var(--White);
  font-size: 16px;
  background: linear-gradient(
    90deg,
    var(--LimeGreen) 0%,
    var(--BrightCyan) 100%
  );
  font-weight: 700;
  cursor: pointer;
  transition: 0.2 ease all;
  &:hover {
    opacity: 0.8;
  }
  ${mobile({
    display: "none",
  })}
`;
const HamBtn = styled.img`
  display: none;
  ${mobile({
    display: "block",
  })}
`;
const MobileMenu = styled.div`
  display: none;
  position: absolute;
  background-color: var(--White);
  top: 80px;
  height: 250px;
  width: 300px;
  border-radius: 5px;
  ${mobile({
    display: "block",
  })}
`;

export const Navbar = () => {
  const [menuOpened, setmenuOpened] = useState(false);
  return (
    <Container>
      <Left>
        <Logo src={LogoImg} alt="logo" />
      </Left>
      <Center>
        <Links>
          <Link>Home</Link>
          <Link>About</Link>
          <Link>Contact</Link>
          <Link>Blog</Link>
          <Link>Careers</Link>
        </Links>
      </Center>
      <Right>
        <Button> Request Invite </Button>
        <HamBtn
          alt="Hamburger"
          src={menuOpened ? CloseBtn : HamMenu}
          onClick={() => {
            setmenuOpened(!menuOpened);
          }}
        />
      </Right>
      {menuOpened && (
        <MobileMenu>
          <Links>
            <Link>Home</Link>
            <Link>About</Link>
            <Link>Contact</Link>
            <Link>Blog</Link>
            <Link>Careers</Link>
          </Links>
        </MobileMenu>
      )}
    </Container>
  );
};
