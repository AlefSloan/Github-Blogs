import styled from "styled-components";

export const CardContainer = styled.div`
  width: 416px;
  height: 260px;
  padding: 2rem;
  border-radius: 10px;

  background: ${props => props.theme["base-post"]};

  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`;

export const CardTitleContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  h2 {
    font-size: 1.25rem;
    font-weight: bold;
    line-height: 160%;
    color: ${(props) => props.theme['base-title']};
  }

  span {
    flex-shrink: 0;
    font-size: 0.875rem;
    line-height: 160%;
    color: ${(props) => props.theme['base-span']};
  }
`;

export const CardTextContainer = styled.div`
  height: 112px;
  overflow: hidden;
  flex-shrink: 0;

  p {
    line-height: 160%;
  }
`;