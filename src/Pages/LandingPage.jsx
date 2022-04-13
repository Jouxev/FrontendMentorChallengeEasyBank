import styled from "styled-components";
import { HeroSection, Navbar, Whychose } from "../Components";
const Container = styled.div`
  width: 100%;
  background-color: var(--LightGrayishBlue);
  min-height: 100vh;
`;

export const LandingPage = () => {
  return (
    <Container>
      <Navbar />
      <HeroSection />
      <Whychose />
    </Container>
  );
};
