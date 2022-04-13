import styled from "styled-components";
import { ReactComponent as Facebook } from "../Assets/Images/icon-facebook.svg";
import { ReactComponent as Instagram } from "../Assets/Images/icon-instagram.svg";
import { ReactComponent as Pinterest } from "../Assets/Images/icon-pinterest.svg";
import { ReactComponent as Twitter } from "../Assets/Images/icon-twitter.svg";
import { ReactComponent as Youtube } from "../Assets/Images/icon-youtube.svg";
import { ReactComponent as LogoImg } from "../Assets/Images/logo.svg";
import { mobile } from "../responsive";

const Container = styled.footer`
  height: auto;
  background-color: var(--DarkBlue);
  display: flex;
  padding: 20px 80px;
  ${mobile({
    flexDirection: "column",
    alignItems: "center",
    padding: "20px 20px",
  })}
`;
const Right = styled.div`
  padding: 20px 0px;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-around;
  & > svg > g > path {
    fill: var(--White);
  }
  ${mobile({
    width: "100%",
    alignItems: "center",
  })}
`;
const SocialContainer = styled.div`
  & > svg {
    margin-right: 10px;
    cursor: pointer;
  }
  & > svg:hover {
    & > path {
      fill: var(--LimeGreen);
    }
  }
  ${mobile({
    margin: "20px 0px",
  })}
`;
const Center = styled.div`
  display: flex;
  flex: 2;
  ${mobile({
    flexDirection: "column",
    flex: "1",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  })}
`;
const Links = styled.ul`
  columns: 2;
  line-height: 200%;
  ${mobile({
    columns: "1",
    width: "100%",
    textAlign: "center",
  })}
`;
const Link = styled.li`
  list-style: none;
  font-size: 16px;
  color: var(--LightGrayishBlue);
  cursor: pointer;
  &:hover {
    color: var(--LimeGreen);
  }
  ${mobile({
    width: "90%",
  })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;
  padding: 20px 0px;
  ${mobile({
    width: "100%",
    alignItems: "center",
  })}
`;
const Button = styled.button`
  border: none;
  padding: 15px 30px;
  margin-bottom: 10px;
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
  ${mobile({})}
`;
const CopyRight = styled.p`
  font-size: 14px;
  color: var(--GrayishBlue);
`;

export const FooterSection = () => {
  return (
    <Container>
      <Right>
        <LogoImg />
        <SocialContainer>
          <Facebook />
          <Youtube />
          <Twitter />
          <Pinterest />
          <Instagram />
        </SocialContainer>
      </Right>
      <Center>
        <Links>
          <Link>About</Link>
          <Link>Contact</Link>
          <Link>Blog</Link>
          <Link>Careers</Link>
          <Link>Support</Link>
          <Link>Privacy Policy</Link>
        </Links>
      </Center>
      <Left>
        <Button> Request Invite </Button>
        <CopyRight>© Easybank. All rights Reserved </CopyRight>
      </Left>
    </Container>
  );
};
