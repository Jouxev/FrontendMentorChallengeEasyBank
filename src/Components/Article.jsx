import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  width: 300px;
  height: 450px;
  background-color: var(--White);
  border-radius: 5px;
  margin-right: 20px;
  ${mobile({
    width: "32Opx",
    margin: "10px 0px",
  })}
`;

const Image = styled.img`
  width: 100%;
  height: 200px;
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
  object-fit: cover;
`;
const Author = styled.p`
  margin-top: 20px;
  margin-left: 20px;
  font-size: 12px;
  color: var(--GrayishBlue);
`;
const Title = styled.h2`
  font-weight: 300;
  font-size: 20px;
  margin-left: 20px;
  color: var(--DarkBlue);
  cursor: pointer;
  &:hover {
    color: var(--LimeGreen);
  }
`;
const Content = styled.p`
  color: var(--GrayishBlue);
  font-size: 14px;
  margin: 0px 20px;
`;

export const Article = (props) => {
  return (
    <Container>
      <Image src={props.item.img} alt={props.item.title} />
      <Author>{props.item.author}</Author>
      <Title>{props.item.title}</Title>
      <Content>{props.item.content} </Content>
    </Container>
  );
};
