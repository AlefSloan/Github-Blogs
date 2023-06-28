import styled from "styled-components";

export const PostSummaryContainer = styled.section`
  width: 100%;
  max-width: 864px;
  height: 168px;
  margin: -5.5rem auto 0;
  padding: 2rem;

  background: ${(props) => props.theme['base-profile']};
  border-radius: 10px;

  h2 {
    font-size: 1.5rem;
    font-weight: bold;
    line-height: 130%;
    color: ${(props) => props.theme["base-title"]};
    margin-bottom: 0.5rem;
  }
`;

export const PostSummaryHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 1.25rem;

  span {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    color: ${(props) => props.theme.blue};
    text-transform: uppercase;

    font-size: 0.75rem;
    font-weight: bold;
    line-height: 160%;

    border-top: 1px solid transparent;
    border-bottom: 1px solid transparent;

    &:hover {
      border-bottom: 1px solid ${(props) => props.theme.blue};
    }

    svg {
      width: 12px;
    }
  }
`;

export const PostSummaryInfoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;

  span {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    color: ${(props) => props.theme['base-span']};
    line-height: 160%;

    svg {
      color: ${(props) => props.theme['base-label']};
      width: 1.125rem;
    }
  }
`;
