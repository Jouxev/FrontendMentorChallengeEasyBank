import styled from "styled-components";
import bgIntroDesktop from "../Assets/Images/bg-intro-desktop.svg";
import bgIntroMobile from "../Assets/Images/bg-intro-mobile.svg";
import imageMockup from "../Assets/Images/image-mockups.png";
import { mobile } from "../responsive";
const Container = styled.section`
  display: flex;
  height: 100vh;
  background-color: var(--VeryLightGray);
  ${mobile({
    flexDirection: "column-reverse",
  })}
`;
const Right = styled.div`
  flex: 2;
  padding: 0px 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: left;
  ${mobile({
    flex: "1",
    padding: "20px",
    textAlign: "center",
  })}
`;

const Title = styled.h1`
  font-weight: 300;
  font-size: 48px;
  color: var(--DarkBlue);
  margin: 0;
  ${mobile({
    fontSize: "32px",
    marginTop: "20px",
  })}
`;
const Desc = styled.p`
  color: var(--GrayishBlue);
  line-height: 25px;
  margin: 20px 0px;
  ${mobile({
    fontSize: "14px",
    margin: "20px 0px",
  })}
`;

const Button = styled.button`
  place-self: flex-start;
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
    placeSelf: "center",
    marginBottom: "40px",
  })}
`;
const Left = styled.div`
  flex: 3;
  height: 100%;
  background: no-repeat url(${bgIntroDesktop});
  background-position: 0% 60%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  ${mobile({
    flex: "1",
    background: `no-repeat url(${bgIntroMobile})`,
    backgroundPosition: "40% 150%",
  })}
`;
const ImageContainer = styled.div`
  overflow-x: hidden;
`;
const Image = styled.img`
  right: 0;
  top: 0;
  margin-top: 50px;
  margin-right: -120px;
  ${mobile({
    width: "100%",
    marginTop: "160px",
  })}
`;
export const HeroSection = () => {
  return (
    <Container>
      <Right>
        <Title> Next generation digital marketing </Title>
        <Desc>
          Take your financial life online. Your Easybank account will be
          one-stop-shop for spending, saving, budgeting, investing, and much
          more.
        </Desc>
        <Button> Request Invite </Button>
      </Right>
      <Left>
        <ImageContainer>
          <Image src={imageMockup} alt="mobile" />
        </ImageContainer>
      </Left>
    </Container>
  );
};
