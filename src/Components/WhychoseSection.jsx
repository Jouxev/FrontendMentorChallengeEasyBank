import styled from "styled-components";
import { whyChooseItems } from "../Data/data";
import { mobile } from "../responsive";
import { WhyChooseItem } from "./WhyChooseItem";

const Container = styled.section`
  padding: 80px;
  ${mobile({
    padding: "30px",
    textAlign: "center",
  })}
`;

const Title = styled.h1`
  font-weight: 300;
  color: var(--DarkBlue);
  font-size: 32px;
`;
const SubTitle = styled.p`
  color: var(--GrayishBlue);
  line-height: 30px;
  margin-bottom: 20px;
  ${mobile({
    fontSize: "16px",
    lineHeight: "20px",
  })}
`;

const Items = styled.div`
  display: flex;
  align-items: center;
  jusity-content: space-evenly;
  margin: 40px 0px;
  ${mobile({
    flexDirection: "column",
  })}
`;

export const Whychose = () => {
  return (
    <Container>
      <Title> Why Choose Easybank?</Title>
      <SubTitle>
        {" "}
        We Leverage Open Banking to turn your bank account into your financial
        hub.
        <br />
        Control Your finance like never before.
      </SubTitle>
      <Items>
        {whyChooseItems.map((item) => (
          <WhyChooseItem item={item} key={item.id} />
        ))}
      </Items>
    </Container>
  );
};
