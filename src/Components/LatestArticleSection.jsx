import styled from "styled-components";
import { Article } from "./Article";
import { articles } from "../Data/data";
import { mobile } from "../responsive";

const Container = styled.section`
  padding: 80px;
  background-color: var(--VeryLightGray);
  ${mobile({
    padding: "30px",
  })}
`;
const Title = styled.h1`
  font-size: 32px;
  font-weight: 300;
  color: var(--DarkBlue);
  margin-bottom: 40px;
  ${mobile({
    textAlign: "center",
  })}
`;
const Items = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  ${mobile({
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  })}
`;
export const LatestArticle = () => {
  return (
    <Container>
      <Title>Latest Articles</Title>
      <Items>
        {articles.map((item) => (
          <Article item={item} key={item.id} />
        ))}
      </Items>
    </Container>
  );
};
