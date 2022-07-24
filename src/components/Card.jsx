import styled from "styled-components";

const StyledCard = styled.div`
  border: 1px solid #dfdfdf;
  border-radius: 2px;
`;

const StyledContent = styled.div`
  padding: 12px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
`;

const StyledImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
`;

const StyledTitle = styled.div`
  font-size: 16px;
  line-height: 20px;
`;

const StyledDescription = styled.div`
  font-size: 14px;
  line-height: 16px;
`;

const StyledButton = styled.button`
  padding: 8px 32px;
  width: max-content;

  border: 0;
  border-radius: 2px;

  background-color: #2141a2;

  color: #ffffff;
  cursor: pointer;
`;

const Card = (props) => {
  const { title, description, buttonText, image, onButtonClick } = props;

  const hasImage = Boolean(image);

  return (
    <StyledCard>
      {hasImage && <StyledImage src={image} />}

      <StyledContent>
        <StyledTitle>{title}</StyledTitle>
        <StyledDescription>{description}</StyledDescription>
        <StyledButton onClick={onButtonClick}>{buttonText}</StyledButton>
      </StyledContent>
    </StyledCard>
  );
};

export { Card };
