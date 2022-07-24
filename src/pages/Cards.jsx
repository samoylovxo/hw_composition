import styled from "styled-components";
import { Card } from "../components/Card";

const CARDS_MOCK_1 = [
  {
    title: "Card 1",
    description: "Text text text 1",
    buttonText: "Button 1",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGrTuyVvRpS-lz4Rg4jVaT9P7iKAx3T2vK5Q&usqp=CAU",
  },
  {
    title: "Card 2",
    description: "Text text text 2",
    buttonText: "Button 2",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGrTuyVvRpS-lz4Rg4jVaT9P7iKAx3T2vK5Q&usqp=CAU",
  },
  {
    title: "Card 3",
    description: "Text text text 3",
    buttonText: "Button 3",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGrTuyVvRpS-lz4Rg4jVaT9P7iKAx3T2vK5Q&usqp=CAU",
  },
];

const CARDS_MOCK_2 = [
  {
    title: "Card 1",
    description: "Text text text 1",
    buttonText: "Button 1",
  },
  {
    title: "Card 2",
    description: "Text text text 2",
    buttonText: "Button 2",
  },
  {
    title: "Card 3",
    description: "Text text text 3",
    buttonText: "Button 3",
  },
];

const StyledPageCards = styled.div`
  display: grid;
  gap: 48px;
`;

const StyledCardList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
`;

const PageCards = () => {
  return (
    <StyledPageCards>
      <StyledCardList>
        {CARDS_MOCK_1.map((card, index) => {
          const { title, description, buttonText, image } = card;

          return (
            <Card
              key={index}
              title={title}
              description={description}
              buttonText={buttonText}
              image={image}
            />
          );
        })}
      </StyledCardList>
      <StyledCardList>
        {CARDS_MOCK_2.map((card, index) => {
          const { title, description, buttonText } = card;

          return (
            <Card
              key={index}
              title={title}
              description={description}
              buttonText={buttonText}
            />
          );
        })}
      </StyledCardList>
    </StyledPageCards>
  );
};

export { PageCards };
