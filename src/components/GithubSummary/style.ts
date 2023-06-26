import styled from "styled-components";

export const GithubSummaryContainer = styled.section`
  width: 100%;
  max-width: 864px;
  margin: 0 auto;
  padding: 2rem;
  border-radius: 10px;
  margin-top: -5.5rem;

  background: ${props => props.theme["base-profile"]};

  display: flex;
  gap: 2rem;

  img {
    height: 148px;
    width: 148px;
    border-radius: 8px;
    margin-left: 0.5rem;
  }
`;

export const GithubTitleContent = styled.div`
  display: flex;
  justify-content: space-between;

  margin: 0.5rem 0;

  h1 {
    color: ${props => props.theme["base-title"]};
    font-size: 1.5rem;
    font-weight: bold;
    line-height: 130%;
    margin: 0;

  }

  a {
    color: ${(props) => props.theme.blue};
    font-size: 0.75rem;
    font-weight: bold;
    line-height: 160%;
    text-transform: uppercase;

    display: flex;
    align-items: center;
    gap: 0.5rem;

    cursor: pointer;

    border-top: 1px solid transparent;
    border-bottom: 1px solid transparent;

    &:hover {
      border-bottom: 1px solid ${(props) => props.theme.blue};
    }
  }
`;

export const GithubTextContent = styled.div`
  margin-bottom: 1.5rem;
  
  p {
    font-size: 1rem;
    line-height: 160%;
  }
`;

export const GithubInfoContent = styled.div`
  display: flex;

  gap: 1.5rem;

  svg {
    width: 1.125rem;
    color: ${(props) => props.theme['base-label']};
  }

  span {
    color: ${(props) => props.theme['base-subtitle']};
    font-size: 1rem;
    line-height: 160%;

    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
`;