import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  width: 320px;
  margin-left: 10px;
  ${mobile({
    margin: "10px 0px",
  })}
`;
const Image = styled.img`
  margin-bottom: 10px;
`;
const Title = styled.h2`
  font-weight: 300;
  color: var(--DarkBlue);
`;
const Desc = styled.p`
  line-height: 25px;
  font-size: 18px;
  color: var(--GrayishBlue);
`;
export const WhyChooseItem = (props) => {
  return (
    <Container>
      <Image src={props.item.img} alt={props.item.title} />
      <Title> {props.item.title} </Title>
      <Desc> {props.item.desc} </Desc>
    </Container>
  );
};
